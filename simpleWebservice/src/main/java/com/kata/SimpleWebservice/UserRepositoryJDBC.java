package com.kata.SimpleWebservice;

import java.util.List;
import javax.sql.DataSource;
import org.dalesbred.Database;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class UserRepositoryJDBC {
	@Autowired
	DataSource dataSource;

	public List<UserJDBC> findAll() {
		var db = Database.forDataSource(dataSource);
		return db.findAll(UserJDBC.class, "SELECT id, name, age, dateofbirth FROM example_user");
	}
}
