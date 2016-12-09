const vm = new Vue({
    el: '#emailsig',
    attached: function () {
        window.location.search
            .replace(/^\?/, '')
            .split('&')
            .forEach(pair => {
                let [param, val = ''] = decodeURIComponent(pair).split('=');
                this[param] = val;
            });
    },
    data: {
        name: '',
        phone: '',
        email: '',
        nmls: '',
        title: '',
        fax: '',
        htmlCode: ''
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
            this.htmlCode = this.$interpolate(document.getElementById('signature').innerHTML).replace(/>\s+<([^\/])/g, '>\n<$1');
        },
        selectCode() {
            const text = document.getElementById('displayedHtml');
            const selection = window.getSelection();
            const range = document.createRange();
            range.selectNodeContents(text);
            selection.removeAllRanges();
            selection.addRange(range);
        },
        selectSignature() {
            const text = document.getElementById('signature');
            const selection = window.getSelection();
            const range = document.createRange();
            range.selectNodeContents(text);
            selection.removeAllRanges();
            selection.addRange(range);
        }
    }
});
