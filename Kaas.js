//Lumi Valkyrie Ipema
//Software Developer MBO4


var question = prompt("Is the cheese Yellow?").toLowerCase();
if (question === "yes") {
            question = prompt("Does the cheese have holes in it?").toLowerCase();
if (question === "yes") {
                question = prompt("Is the cheese very expensive?").toLowerCase();
if (question === "yes") {
                    alert("Great news, we have determined that you had Emmentaler cheese!");

} else if (question === "no") {
                    alert("Great news, we have determined that you had Leerdammer cheese!");

                }
} else if (question === "no") {
                question = prompt("is the cheese hard as rocks?").toLowerCase();
  	if (question === "yes") {
                    alert("Great news we have determined you had parmigiano reggiano cheese!.");

		} else if (question === "no") {
                    alert("Great news we have determined that you had Goudse cheese!.");
            }
                }

} else if (question === "no") {
           question = prompt("Does the cheese have blue mold?").toLowerCase();
       if (question === "yes") {
           question = prompt("Does the cheese have a crust?").toLowerCase();
      		 if (question === "yes") {
                    alert("Great news, we have determined that you had bleu de rochebaron!");

				 } else if (question === "no") {
                    alert("Great news we have determined that you had fourme d'ambert!");
              		  }

     } else if (question === "no") {
                question = prompt("Does the cheese have a crust?").toLowerCase();
           		 if (question === "yes") {
                    alert("Great news, we have determined you had camembert!.");

     } else if (question === "no") {
                    alert("Great news, we have determined you had mozzarella!.");
                }
            }
        }