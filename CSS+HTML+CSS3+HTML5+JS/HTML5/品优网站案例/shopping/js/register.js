window.onload = function () {
  var regtel = /^1[3|4|5|7|8|9]\d{9}$/
  var tel = document.querySelector('#tel')
  tel.onblur = function () {
    if (regtel.test(this.value)) {
      this.nextElementSibling.className = 'success'
      this.nextElementSibling.innerHTML = '<i class="success_icon"></i>恭喜输入正确'
    } else {
      his.nextElementSibling.className = 'error'
      this.nextElementSibling.innerHTML = '<i class="error_icon"></i>输入不正确'
    }
  }
}
