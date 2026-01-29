const form = document.querySelector('.signup-form')

form.addEventListener('submit', function(event) {
    event.preventDefault()
    
    const userId = document.getElementById('userId').value
    const password = document.getElementById('password').value
    const passwordConfirm = document.getElementById('passwordConfirm').value
    const userName = document.getElementById('userName').value
    const tel = document.getElementById('tel').value
    const email = document.getElementById('email').value
    
    const genderRadio = document.querySelector('input[name="gender"]:checked')
    let gender = ''
    if (genderRadio) {
        if (genderRadio.value === 'male') {
            gender = '남성'
        } else {
            gender = '여성'
        }
    }
    
    if (userId.length < 8) {
        alert('아이디는 8자 이상이어야 합니다.')
        return
    }
    
    if (password.length < 8) {
        alert('비밀번호는 8자 이상이어야 합니다.')
        return
    }
    
    if (password !== passwordConfirm) {
        alert('비밀번호가 일치하지 않습니다.')
        return
    }
    
    alert('가입 정보입니다:\n\n' +
        '아이디: ' + userId + '\n' +
        '이름: ' + userName + '\n' +
        '전화번호: ' + tel + '\n' +
        '성별: ' + gender + '\n' +
        '이메일: ' + email)
})
