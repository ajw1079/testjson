$(document).ready(function(){
	$.ajax({
		url : "list.json",
		dataType : "json",
		success : function(result){
			$(result.list).each(function(a, b, c){  //json 데이터의 list 항목에 저장된 값 만큼 함수 내의 실행문을 반복하여 실행. 이 때 매개변수 b에 list 값으로 저장된 객체가 순서대로 할당되도록 진행
				console.log("a:"+a+", b:"+b);  //a는 인덱스번호, b는 인덱스번호에 따른 객체
				$("#wrap ul").append("<li>"+b["k"]+""+c["city"]+"</li>");  
				//{"k" : "캐나다"} 중에서 네이밍으로 지정한 "k"의 값을 반환 => 캐나다
				//{"k" : "프랑스"} 중에서 네이밍으로 지정한 "k"의 값을 반환 => 프랑스
				//{"k" : "브라질"} 중에서 네이밍으로 지정한 "k"의 값을 반환 => 브라질
			});
		}
	})
});

	//$("선택자").each(function(){ ...실행문... })
	//$.each("선택자", function(){ ...실행문... })