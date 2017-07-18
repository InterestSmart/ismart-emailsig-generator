const vm = new Vue({
    el: '#emailsig',
    attached: function () {
        window.location.search
            .replace(/^\?/, '')
            .split('&')
            .forEach(pair => {
                let [param, val = ''] = decodeURIComponent(pair.replace(/\+/g,' ')).split('=');
                this[param] = val;
            });
    },
    data: {
        name: '',
        direct_phone: '',
        email: '',
        nmls: '',
        title: '',
        fax_number: '',
        htmlCode: ''
    },
    watch: {
        'name': 'compileRawHtml',
        'direct_phone': 'compileRawHtml',
        'email': 'compileRawHtml',
        'nmls': 'compileRawHtml',
        'title': 'compileRawHtml',
        'fax_number': 'compileRawHtml'
    },
    computed: {
        phone() {
            return this.formatPhone(this.direct_phone);
        },
        fax() {
            return this.formatPhone(this.fax_number);
        }
    },
    methods: {
        formatPhone(value) {
            let num = (value || '').replace(/[^0-9]/g, '');
            const strlen = num.length;
            if(strlen < 10 || strlen > 11) {
                return num;
            }
            // If it starts with one remove it
            if(strlen === 11 && num[1] == 1) {
                num = num.slice(1);
            }
            // Returns only the first 10 digits so if the first digit isn't 1
            // we wont't send the last one.  It's a phone number after all!!
            if(strlen === 10) {
                return '1-'+num.slice(0,3)+'-'+num.slice(3,6)+'-'+num.slice(6,10);
            }
        },
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
