        /*
            Создайте функцию, которая по клику на "показать день недели" возвращает день недели для выбранной даты с интута.
            День нужно возвратить в div#result в текстовом формате т.е понедельник, вторник, суббота и т.д
          */



         let ShowDay=document.getElementById('ShowDayButton')
         
         ShowDay.addEventListener('click', function(){
         let resultBlock = document.getElementById('result');
         let week = ["Sunday","Monday", "Tuesday", "Wednesday", 
         "Thursday", "Friday", "Saturday"];
          let MyDateSelector = document.getElementById('MyDateSelector');
          let day = MyDateSelector.value;
          let newDate = new Date(day);
          resultBlock.innerHTML = week[newDate.getDay()];
      
      })