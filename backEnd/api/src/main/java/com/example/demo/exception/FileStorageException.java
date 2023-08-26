package com.example.demo.exception;

public class FileStorageException extends RuntimeException {

	public FileStorageException(String mensagem) {
		super(mensagem);
	}
	public FileStorageException(String mensagem, Throwable causa) {
		super(mensagem, causa);
	}
	
}
