package member.service;

import org.springframework.beans.factory.annotation.Autowired;

import member.dao.MemberDao;

public class AjaxService {
	@Autowired
    private MemberDao memberDao;
    

 
    public int checkId(String id) {
        int result = 0;
        
        result = memberDao.checkId(id);
        return result;
    }
	
}
