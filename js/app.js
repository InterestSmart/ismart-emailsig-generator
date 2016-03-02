var vm = new Vue({
  el: '#emailsig',
  data: {
    name: '',
    phone: '',
    email: '',
    nmls: '',
    title: '',
    fax: '',
    htmlCode: document.getElementById('signature').innerHTML.replace(/^\s*\n/gm, '').replace(/\t/g,"")
  },
  watch: {
    'name': 'compileRawHtml',
    'phone': 'compileRawHtml',
    'email': 'compileRawHtml',
    'nmls': 'compileRawHtml',
    'title': 'compileRawHtml',
    'fax': 'compileRawHtml'
  },  
  methods: {
    compileRawHtml() {
      this.htmlCode = this.$interpolate(document.getElementById('signature').innerHTML.replace(/^\s*\n/gm, '').replace(/\t/g,""));
    },
  	selectCode() {
  		var text = document.getElementById('displayedHtml');
		  var selection = window.getSelection();
      var range = document.createRange();
      range.selectNodeContents(text);
      selection.removeAllRanges();
      selection.addRange(range);
  	},
  	selectSignature() {
  		var text = document.getElementById('signature');
		  var selection = window.getSelection();
      var range = document.createRange(); 
      range.selectNodeContents(text);
      selection.removeAllRanges();
      selection.addRange(range);
  	}
  }
});