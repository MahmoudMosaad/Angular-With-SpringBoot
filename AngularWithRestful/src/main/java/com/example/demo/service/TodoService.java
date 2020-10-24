package com.example.demo.service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;

import com.example.demo.model.Todo;


@Service
public class TodoService {
	private static List<Todo> todos = new ArrayList<Todo>();
	private static int todoCount = 3;

	static {
		todos.add(new Todo(1, "mahmoud", "Learn Spring MVC", new Date(), false));
		todos.add(new Todo(2, "mahmoud", "Learn Struts", new Date(), false));
		todos.add(new Todo(3, "mahmoud", "Learn Hibernate", new Date(), false));
	}

	public List<Todo> retrieveTodos(String user) {
		List<Todo> filteredTodos = new ArrayList<Todo>();
		for (Todo todo : todos) {
			if (todo.getUser().equals(user)) {
				filteredTodos.add(todo);
			}
		}
		return filteredTodos;
	}

	public void addTodo(String name, String desc, Date targetDate, boolean isDone) {
		todos.add(new Todo(++todoCount, name, desc, targetDate, isDone));
	}

//	public void deleteTodo(int id) {
//		Iterator<Todo> iterator = todos.iterator();
//		while (iterator.hasNext()) {
//			Todo todo = iterator.next();
//			if (todo.getId() == id) {
//				iterator.remove();
//			}
//		}
//	}
	
	public Todo deleteById(int id) {
		Todo todo = retrieveTodo(id);
		if(todo == null) return null;
		if(todos.remove(todo)) return todo;
		return null;
	}

	public Todo retrieveTodo(int id) {
		for (Todo todo : todos) {
			if (todo.getId() == id) {
				return todo;
			}
		}
		return null;
	}

	public void updateTodo(Todo todo) {
		int index = todos.indexOf(todo);
		todos.remove(todo);
		todos.add(index, todo);
	}
	
	public Todo save(Todo todo) {
		
		if(todo.getId() == -1)
		{
			todo.setId(++todoCount);
			todos.add(todo);
		}
		else {
			int index = todos.indexOf(todo);
			todos.remove(todo);
			todos.add(index, todo);
		}
		
		return todo;
	}
}