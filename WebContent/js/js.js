/*회원가입*/
$(document).ready(function() {
    // 회원가입
    $("#success").click(function(event) {
        event.preventDefault();

        var id = $("input[name='id']").val();
        var name = $("input[name='name']").val();
        var password = $("input[name='password']").val();
        var confirmPassword = $("input[name='confirmPassword']").val();

        if (id === "" || name === "" || password === "" || confirmPassword === "") {
            alert("빈 칸을 모두 입력하세요.");
            return;
        }

        if (password !== confirmPassword) {
            alert("비밀번호가 일치하지 않습니다.");
            return;
        }

        var result_checkId = $("#result_checkId").text();
        if (result_checkId !== "사용 가능한 아이디입니다.") {
            alert("아이디 중복 검사 후 가입 버튼을 눌러주세요.");
            return;
        }

        $.ajax({
            type: "POST",
            url: "join.do",
            data: $("form").serialize(),
            success: function(response) {
                alert("회원가입이 완료되었습니다. 로그인 페이지로 이동합니다.");
                window.location.href = "login.do"; 
            },
            error: function(xhr, status, error) {
                alert("회원가입 중 오류가 발생했습니다. 다시 시도해주세요.");
            }
        });
    });

    // 한글 입력 불가
    $("#id").on("input", function() {
        var koreanRegex = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
        if (koreanRegex.test(this.value)) {
            alert("한글 입력 불가");
            this.value = this.value.replace(/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/g, "");
        } else {
            this.value = this.value.replace(/[^a-zA-Z0-9@.]/g, "");
        }
    });
    
           $("#name").on("input", function() {

        // 영문과 한글만 입력 가능하게 함
        if (/[^a-zA-Zㄱ-ㅎㅏ-ㅣ가-힣]/.test(this.value)) {
            alert("영문 또는 한글만 입력 가능합니다.");
            this.value = this.value.replace(/[^a-zA-Zㄱ-ㅎㅏ-ㅣ가-힣]/g, "");
        }

        if (this.value.length > 10) {
            this.value = this.value.substring(0, 10);
        }

    });




		/*아이디 중복 검사*/
    $("#checkId").click(function() {
        let id = $("#id").val();
        
                if (id === "") {
            alert("아이디를 입력해주세요.");
            return;
        }
        
        $.ajax({
            type: 'post',
            url: "checkId.do", // 컨트롤러로 가는 mapping 입력
            data: { "id": id },
            dataType: "json",
            success: function(data) { 
                if (data.status === "N") {
                    result = "사용 가능한 아이디입니다.";
                    $("#result_checkId").html(result).css("color", "green");
                    $("#password").trigger("focus");
                } else {
                    result = "이미 사용중인 아이디입니다.";
                    $("#result_checkId").html(result).css("color", "red");
                    $("#id").val("").trigger("focus");
                }
            },
            error: function(error) {
                alert("error: " + error);
            }
        });
    });
    

});


    
    
    



/*게시물 수정*/
$(document).ready(function() {
    $("#modify").click(function(event) {
        event.preventDefault(); // 기본 동작 중단

        // 입력값 확인
        var title = $("input[name='title']").val();
        var content = $("textarea[name='content']").val(); // textarea 입력값 가져오기
        
        if (title === "" || content === "") {
            alert("빈 칸을 모두 입력하세요.");
            return;
        }

        // 회원가입 데이터를 서버로 전송
        $.ajax({
            type: "POST",
            url: "modify.do",
            data: $("form").serialize(),
            success: function(response) {
               
                alert("수정이 완료되었습니다.");
                
                window.location.href = "list.do"; 
            },
            
        });
    });
});


/*게시물 삭제 */
$(document).ready(function() {
    $(".delete-link").click(function(event) {
        event.preventDefault();
        var articleNo = $(this).data("article-no");
        var con = confirm("정말로 이 글을 삭제하시겠습니까?");
        
        if (con) {
            $.ajax({
                type: "GET",
                url: "delete.do",
                data: { no: articleNo },
                success: function(response) {
                    alert("글이 삭제되었습니다.");
                     window.location.href = "list.do";
                    // 삭제된 게시글을 목록에서 제거하거나 다시 불러오는 등의 처리
                    // 예를 들어, 아래와 같이 삭제된 행을 제거할 수 있습니다.
                    // $("#article-" + articleNo).remove();
                },
                error: function(xhr, textStatus, errorThrown) {
                    alert("글 삭제 실패: " + textStatus);
                }
            });
        }
    });
});


/*게시물 작성*/
$(document).ready(function() {
    $("#writes").click(function(event) {
        event.preventDefault();
        
        var title = $("input[name='title']").val();
        var content = $("textarea[name='content']").val();
        
        
             if (title === "") {
            alert("제목을 입력하세요.");
            return;
        }
              if (content === "") {
            alert("내용을 입력하세요.");
            return;
        }
        
           if (title === "" || content === "") {
            alert("빈 칸 모두 입력하세요.");
            return;
        }
        
        $.ajax({
            type: "POST",
            url: "write.do",
            data: { title: title, content: content },
            
            
            success: function(response) {
			console.log(response);
   
                    alert("게시글이 등록되었습니다.");
                    // 성공적으로 등록되었으면 페이지 이동
                    window.location.href = "list.do";
                
            },
            
        });
    });
});

/*패스워드변경*/
$(document).ready(function() {
    $("#changePw").click(function(event) {
        event.preventDefault();
        
        var curPwd = $("#curPwd").val();
        var newPwd = $("#newPwd").val();
        
        $(".error-message").text(""); // 기존 오류 메시지 초기화
        
        if (!curPwd) {
            $("#curPwdError").text("현재 암호를 입력하세요.");
            return;
        }
        if (!newPwd) {
            $("#newPwdError").text("새 암호를 입력하세요.");
            return;
        }
        
        // 서버로 비밀번호 변경 요청 보내기
        $.ajax({
            type: "POST",
            url: "changePwd.do",
            data: { curPwd: curPwd, newPwd: newPwd },
            
            success: function(response) {
                if (response === "badCurPwd") {
                    $("#curPwdError").text("현재 암호가 일치하지 않습니다.");
                } else {
                    alert("암호변경을 완료했습니다.");
                    // 성공적으로 변경되었으면 페이지 이동
                    window.location.href = "index.jsp";
                }
            },
            
            error: function(xhr, status, error) {
                console.log(xhr.responseText);
                alert("암호 변경 실패: " + status);
            }
        });
    });
});













