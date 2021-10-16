

    let cardId = document.querySelectorAll('.card-img');
    cardId.forEach(element => {
        element.addEventListener('click', () => {
            let id = $(element).attr("dataId")
            console.log(id);
            window.location.href = id
        })
    })
    const sms = setTimeout(msg, 2000)
    function msg() {
        $('.alert').fadeOut('slow')
    }
