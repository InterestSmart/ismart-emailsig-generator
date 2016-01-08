new Vue({
  el: '#emailsig',
  data: {
    name: '',
    phone: '',
    email: '',
    nmls: '',
    title: '',
    fax: ''
  },
  computed: {
  	htmlCode: function() {
  		return document.getElementById('signature').innerHTML.replace(/\t/g,"");
  	}
  },
  methods: {
  	selectCode: function() {
  		var text = document.getElementById('displayedHtml');
		var selection = window.getSelection();
        var range = document.createRange();
        range.selectNodeContents(text);
        selection.removeAllRanges();
        selection.addRange(range);
  	},
  	selectSignature: function() {
  		var text = document.getElementById('signature');
		var selection = window.getSelection();
        var range = document.createRange();
        range.selectNodeContents(text);
        selection.removeAllRanges();
        selection.addRange(range);
  	}
  }
});