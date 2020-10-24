package com.example.demo.model;

public class Massage {
	private String message;

	public Massage(String message) {
		super();
		this.message = message;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	@Override
	public String toString() {
		return String.format("Massage [message=%s]", message);
	}
	

}
