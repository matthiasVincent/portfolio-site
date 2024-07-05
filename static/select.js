const srch = document.querySelectorAll('[srch]')
const row = document.querySelectorAll('.ro')
const srch_val = document.getElementById('srch_val')

srch_val.addEventListener('keyup',
function() {
   let w = this.value
    for (let i=0; i<row.length;i++)
    { 
        if (srch[i].innerHTML.indexOf(this.value) >= 0)
        {
            row[i].style.display = 'block'
        } 
        else
        {
            row[i].style.display = 'none'
        }

    }
}
)