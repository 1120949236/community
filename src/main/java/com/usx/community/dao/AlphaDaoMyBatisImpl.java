package com.usx.community.dao;

import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Repository;

@Repository
public class AlphaDaoMyBatisImpl implements AlphaDao {
    @Override
    public String select() {
        return "MyBatis";
    }
}
