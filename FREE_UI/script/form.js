document.getElementById("weekdays").onclick = function () {
			
			var obj0 = document.getElementById("smallTitle");
			
	        var div0 = document.getElementById("container");

	        var div1 = document.createElement("div");
	        div1.classList.add("col-md-12");
	        div1.classList.add("new");

	        var div2 = document.createElement("div");
	        div2.classList.add("row");

	        

	        
	        var canvas = document.createElement("div");
	        canvas.classList.add("canvas");
	        canvas.setAttribute("id","graphField");
	        div0.appendChild(canvas);
	        

	        var title = ["・就寝時間", "・朝食", "・学校または仕事", "・自主学習", "・夕食", "・趣味など", "・その他"];
		        for (var i in title) {
		        
		        	var div3 = document.createElement("div");
	        		div3.classList.add("col-md-6");

		            var p = document.createElement("p");
		            var text = document.createTextNode(title[i]);

		            var div4 = document.createElement("div");
		            div4.classList.add("ft");

		            var timeInput1 = document.createElement("input");
		            timeInput1.classList.add("new");
		            timeInput1.setAttribute("type", "time");
		            timeInput1.setAttribute("value", "00:00");

		            var mark = document.createTextNode("～");

		            var timeInput2 = document.createElement("input");
		            timeInput2.classList.add("new");
		            timeInput2.setAttribute("type", "time");
		            timeInput2.setAttribute("value", "00:00");

		            div3.appendChild(p);
		            p.appendChild(text);
		            
		            div4.appendChild(timeInput1);
		            div4.appendChild(mark);
		            div4.appendChild(timeInput2);
		            div3.appendChild(div4);
		            div2.appendChild(div3);
		        };
		        
		    var button1 = document.createElement("button");
		    var bName1 = document.createTextNode("戻る");
		    
		    var button2 = document.createElement("button");
		    var bName2 = document.createTextNode("完了");
		    
		    button1.appendChild(bName1);
		    button2.appendChild(bName2);
		    

	            div1.appendChild(div2);
	            div1.appendChild(button1);
	            div1.appendChild(button2);
	            div0.appendChild(div1);
	            
	        button1.onclick = function(){
	        	jQuery(function($){
	        		$(".new").detach('');
			
	        	});
	        };
	        
	        var ctx = document.getElementById("graphField");
				var myChart = new Chart(ctx, {
					type: 'pie',
						data: {
							labels: ['睡眠', '朝食', '学校または仕事', '自主学習', '夕食', '趣味など', 'その他'],
								datasets:[{
									backgroundColor:[
										"rgba(128,0,128,0.4)",
										"rgba(220,20,60,0.4)",
										"rgba(255,165,0,0.4)",
										"rgba(255,255,0,0.4)",
										"rgba(154,205,50,0.4)",
										"rgba(102,205,170,0.4)",
										"rgba(72,61,139,0.4)"
									],
									data: [6, 1, 6, 3, 5, 1, 3]
								}]
						}
					});
	        
	    };
	    
	    document.getElementById("holidays").onclick = function () {
			
			var obj0 = document.getElementById("smallTitle");
	        var div0 = document.getElementById("container");

	        var div1 = document.createElement("div");
	        div1.classList.add("col-md-12");
	        div1.classList.add("new");

	        var div2 = document.createElement("div");
	        div2.classList.add("row");

	        

	        
	        
	        

	        var title = ["・就寝時間", "・朝食", "・自主学習", "・夕食", "・趣味など", "・その他"];
		        for (var i in title) {
		        
		        	var div3 = document.createElement("div");
	        		div3.classList.add("col-md-6");

		            var p = document.createElement("p");
		            var text = document.createTextNode(title[i]);

		            var div4 = document.createElement("div");
		            div4.classList.add("ft");

		            var timeInput1 = document.createElement("input");
		            timeInput1.classList.add("new");
		            timeInput1.setAttribute("type", "time");
		            timeInput1.setAttribute("value", "00:00");

		            var mark = document.createTextNode("～");

		            var timeInput2 = document.createElement("input");
		            timeInput2.classList.add("new");
		            timeInput2.setAttribute("type", "time");
		            timeInput2.setAttribute("value", "00:00");

		            div3.appendChild(p);
		            p.appendChild(text);
		            
		            div4.appendChild(timeInput1);
		            div4.appendChild(mark);
		            div4.appendChild(timeInput2);
		            div3.appendChild(div4);
		            div2.appendChild(div3);
		        };
		        
		    var button1 = document.createElement("button");
		    var bName1 = document.createTextNode("戻る");
		    
		    var button2 = document.createElement("button");
		    var bName2 = document.createTextNode("完了");
		    
		    button1.appendChild(bName1);
		    button2.appendChild(bName2);
		    

	            div1.appendChild(div2);
	            div1.appendChild(button1);
	            div1.appendChild(button2);
	            div0.appendChild(div1);
	            
	        button1.onclick = function(){
	        	jQuery(function($){
	        		$(".new").remove('');
					$myChart.remove('');
	        	});
	        };
        
    };