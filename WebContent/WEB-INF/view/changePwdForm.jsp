<%@ page contentType="text/html; charset=utf-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<title>암호 변경</title>

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Jua&display=swap" rel="stylesheet">
<link rel="stylesheet" href="css/css.css">

<script src="http://code.jquery.com/jquery-latest.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="js/js.js"></script>

</head>
<body>

<div class="login-box">
<form action="changePwd.do" method="post">
<div class="user-box">
    <p>
        <label>현재 암호:</label><br/>
        <input type="password" name="curPwd" id="curPwd">
        <span id="curPwdError" class="error-message"></span>
    </p>
</div>


<div class="user-box">
<p>
    <label>새 암호:</label><br/><input type="password" name="newPwd" id="newPwd">
    <span id="newPwdError" class="error-message"></span>
</p>
</div>

    <div style="display: flex; justify-content: center;">
    <button class="buttonS" id="changePw">암호변경
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      </button>
	
	
	</div>
</form>
</div>

</body>
</html>


