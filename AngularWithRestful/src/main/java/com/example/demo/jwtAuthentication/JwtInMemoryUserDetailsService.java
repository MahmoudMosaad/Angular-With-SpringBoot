package com.example.demo.jwtAuthentication;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class JwtInMemoryUserDetailsService implements UserDetailsService {

	static List<JwtUserDetails> inMemoryUserList = new ArrayList<>();

	static {
		inMemoryUserList.add(new JwtUserDetails(1L, "mahmoud",
				"$2a$10$2PFUH54Zp13POynpRX.LSu95mHDdmnBorxccHludl7gXHdi2Gfldq", "ROLE_USER_2"));
	}

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		Optional<JwtUserDetails> findFirst = inMemoryUserList.stream()
				.filter(user -> user.getUsername().equals(username)).findFirst();

		if (!findFirst.isPresent()) {
			throw new UsernameNotFoundException(String.format("USER_NOT_FOUND '%s'.", username));
		}

		return findFirst.get();
	}

	public List<JwtUserDetails> getInMemoryUserList() {
		return inMemoryUserList;
	}

	public void print() {
		for(JwtUserDetails user : inMemoryUserList)
			System.out.println(user.getUsername()+"   "+user.getPassword());

	}

}
