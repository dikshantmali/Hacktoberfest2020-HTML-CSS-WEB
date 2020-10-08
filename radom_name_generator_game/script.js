
var getlooser = new getLooser;

function getLooser(){
    this.applicants = [];

    this.init = function(){
        this.addApplicants();
        this.getRandomUser();
        this.runAgain();
        this.startOver();
    }

    this.showList = function(){
        var parent = document.querySelector('.applicant_list_wrapper');
        var template = '';

        for(var i = 0 ; i < this.applicants.length;i++){
            template += '<span class="name-tag" data-id="'+i+'">'+ this.applicants[i]+'</span>'
        }
        
        parent.innerHTML = '';
        parent.insertAdjacentHTML('afterbegin',template);
        this.deleteOne();
    }


    this.addApplicants = function(){
        var $this = this;

        function generateList(input){
            var value = input.value;
    
            if($this.checkValid(value.toLowerCase())){
                $this.applicants.push(value.toLowerCase());
                input.value = '';
                $this.showList()
            } else{
                alert('Something is wrong')
            }
        }

        var addBtn = document.querySelector('#add_applicant');
        addBtn.addEventListener('click',function(){
            var input = document.querySelector('#applicant_value');
            generateList(input)
        })
    }


    this.checkValid = function(value){
        if(this.applicants.indexOf(value) < 0 && value != ''){
            return true
        }
        return false;
    }


    this.getRandomUser = function(){
        var $this = this;
        var resultsButton = document.querySelector('#show_results');

        function showLooser(){
            var resultsContainer = document.querySelector('.results_container');
            var applicantsContainer = document.querySelector('.applicant_container');

            
            applicantsContainer.className += ' hidden';
            resultsContainer.className = 'results_container';
            
            $this.showRandomUser();
        }

        resultsButton.addEventListener('click',function(e){
            if($this.applicants.length > 1){
                showLooser();
            } else {
                alert('Yor need more users')
            }
        })
    }


    this.showRandomUser = function(){
        var resultsContainer = document.querySelector('.result');
        var rand = this.applicants[Math.floor(Math.random() * this.applicants.length)];

        resultsContainer.innerHTML = '';
        resultsContainer.insertAdjacentHTML('afterbegin','<h3>'+ rand +'</h3>');
    }


    this.runAgain = function(){
        var $this = this;
        var runAgainBtn = document.querySelector('.run_again');

        runAgainBtn.addEventListener('click',function(e){
            $this.showRandomUser();
        })
    }

    this.startOver = function(){
        var $this = this;
        var startOverBtn = document.querySelector('.start_again');

        startOverBtn.addEventListener('click',function(e){
            var resultsContainer = document.querySelector('.results_container');
            var applicantsContainer = document.querySelector('.applicant_container');
            var applicantsWrapper = document.querySelector('.applicant_list_wrapper');

            resultsContainer.className = 'results_container hidden';
            applicantsContainer.className = 'applicant_container';
            applicantsWrapper.innerHTML = '';

            $this.applicants = [];
        })
    }


    this.deleteOne = function(){
        var $this = this;
        var item = document.querySelectorAll('.name-tag')

        function removeIt(element){
            var attr = parseInt(element.getAttribute('data-id'));
            $this.applicants.splice(attr,1);

            $this.showList();
        }

        for( var i = 0; i < item.length;i++){
            item[i].addEventListener('click',function(e){
                removeIt(this)
            })
        }

    }
 
}


getlooser.init();