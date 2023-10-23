package controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import article.dao.ArticleContentDao;
import article.dao.ArticleDao;
import auth.service.LoginService;
import member.dao.MemberDao;
import member.model.Member;
import member.service.ChangePasswordService;
import mybatis.dao.MemberDAO;

@Controller
public class MyController {
	@Autowired
	private ArticleContentDao articleContentDao;
	@Autowired
	private ArticleDao articleDao;
	
	@Autowired
	private MemberDAO memberDAO; 
	
	@Autowired
	private MemberDao memberDao;
	
	@Autowired
	private LoginService loginService;
	
	@Autowired
	private ChangePasswordService changePasswordService;
	
	@GetMapping("/count")
	public String countMember() {
		
		// 마이바티스 테스트
//		List<Member> list = memberDAO.selectAll();
//		System.out.println(list);
		
//		System.out.println(memberDAO.selectCount());
		
//		List<Member> list = memberDAO.selectList();
//		for(Member member : list) {
//		System.out.println(member);	
//		}
		
//		Member member = memberDAO.selectById("test3");
//		System.out.println(member);
		
//		memberDAO.updateArtilce("글제목 369", 12);
		
//		ArticleContent artc1 = new ArticleContent(105, "김기철");
//		memberDAO.insertArtCont(artc1);
		
//		Writer wr = new Writer("test34", "홍길동34");
//		Article art = new Article(0, wr, "홍길동 테스트", null, null, 0);
//		memberDAO.insertArticle(art);
//		System.out.println(art);
		
		
		
//		User user = loginService.login("test", "4567");
//		System.out.println(user.getId()+","+user.getName());
//		changePasswordService.changePassword("test", "4567", "1234");
		
//		 insert
//		ArticleContent ac1 = new ArticleContent(101, "내용2");
//		ArticleContent ac2 = articleContentDao.insert(ac1);
//		System.out.println(ac2);
		
		// select
//		ArticleContent ac3 = articleContentDao.selectById(100);
//		System.out.println(ac3);
		
		// update
//		articleContentDao.update(100, "내용1");
		
		
		// Writer
//		Writer writer = new Writer("test34", "홍길동34");
//		Article article = new Article(null, writer, "내용34", null, null, 0);
//		System.out.println(articleDao.insert(article));
		
//		articleDao.update(1, "글제목222");
//		System.out.println(articleDao.selectById(1));
		
		articleDao.delete(18);
		
		return "count";
	}
	
	@GetMapping("/all")
	public String all(Model model) {
		List<Member> list = memberDao.selectAll();
//		for (Member member : list) {
//			System.out.println(member);
//		}
		model.addAttribute("list", list);
		return "all";
	}

	@GetMapping("/hello")
	public String hello() {
		return "hello";
	}
	
	@GetMapping("/gugu")
	public String gugu() {
		return "guguForm";
	}
	
	@PostMapping("/gugu")
	public String guguResult(Model model, @RequestParam String dan) {
		List<String> list = new ArrayList<>();
		int num = Integer.parseInt(dan);
		for (int i=1; i <= 9; i++) {
			String res 
					= String.format("%d X %d = %d", num, i, i*num);
			list.add(res);
		}
//		for (String s : list) {
//			System.out.println(s);
//		}
		model.addAttribute("list", list);
		return "guguResult";
	}
}




