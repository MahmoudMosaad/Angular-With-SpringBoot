package com.example.demo.controller;

import java.net.URI;
import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.example.demo.model.Todo;
import com.example.demo.service.TodoServiceJPA;

@CrossOrigin(origins ="http://localhost:4200")
@RestController
public class TodoController {

	@Autowired
	TodoServiceJPA service;


	@GetMapping(path = {"users/{userName}/todos"})
	public List<Todo> showTodos(@PathVariable String userName/*, @RequestParam("id") Optional<Integer> id*/) {

			return service.findByUser(userName);
	}


	@RequestMapping(path = "/users/{userName}/todos/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Todo> deleteTodo(@PathVariable String userName,@PathVariable int id) {
    
		Todo todo = service.findById(id).get();
		 service.deleteById(id);
		if(todo != null)
		{
			return ResponseEntity.noContent().build();
		}
		return ResponseEntity.notFound().build();
	}
//
	@RequestMapping(value = "/users/{userName}/todos/{id}", method = RequestMethod.GET)
	public Todo showUpdateTodoPage(@PathVariable int id) {
		Optional<Todo> todo = service.findById(id);
		if(todo.isPresent()) return todo.get();
		return null ;
		
	}
//
	@RequestMapping(value = "/users/{userName}/todos/{id}", method = RequestMethod.PUT)
	public ResponseEntity<Todo> updateTodo(@PathVariable String userName,
			@PathVariable int id,@RequestBody Todo todo) {
		Todo todoUpdated = service.save(todo);
		return new ResponseEntity<Todo>(todoUpdated , HttpStatus.OK);
	}

	@RequestMapping(value = "/users/{userName}/todos", method = RequestMethod.POST)
	public ResponseEntity<Todo> addTodo(@PathVariable String userName,
			@Valid @RequestBody Todo todo) {
		//todo.setId(-1);
		Todo todoCreated = service.save(todo);
		
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
				.buildAndExpand(todoCreated.getId()).toUri();
		
		return ResponseEntity.created(uri).build();
	}
}
