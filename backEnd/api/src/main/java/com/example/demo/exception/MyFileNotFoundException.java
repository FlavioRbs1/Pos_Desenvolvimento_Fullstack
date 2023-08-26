package com.example.demo.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class MyFileNotFoundException extends RuntimeException {
	
	public MyFileNotFoundException(String mensagem) {
		super(mensagem);
	}
	public MyFileNotFoundException(String mensagem, Throwable causa) {
		super(mensagem, causa);
	}
}
