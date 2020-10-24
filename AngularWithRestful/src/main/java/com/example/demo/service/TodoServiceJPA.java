package com.example.demo.service;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.Todo;

public interface TodoServiceJPA extends JpaRepository<Todo, Integer>{
	
	List<Todo> findByUser(String name);

}
