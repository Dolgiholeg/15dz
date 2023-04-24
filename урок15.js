/* const ani = ['cat','dog','turtle','cat2','cat3']

console.log(ani.length)
const  mas = ani.slice(1,3)//вырезаем часть массива
console.log(mas)

ani.sort()
console.log(ani)//сортирует по алфавиту

const nums = [2,4,5,1,2,30,33]
nums.sort(function (a, b) {return b-a})// сортирует от большего к меньшему
console.log(nums)
console.log('min',nums[0],'max',nums[nums.length-1])

/////////////////////////////////////////////////создаём массив из случайных чисел, количество чисел задём через prompt.
//////////////////////////////////////////////// Далее сортируем определяя максимальное и минимальное число в массиве


let n = prompt('chislo')
const nn = []

for(let i=0; i<n; i++){               <<<=ЦИКЛ
r = Math.floor(Math.random()*100+1)
nn.push(r)
}
console.log(nn)
nn.sort(function (a, b) {return b-a})

console.log('min',nn[0],'max',nn[nn.length-1])

const nums = [40,42,43,12,22]
const nums2 = []

for (let i = 0; i<nums.length; i++){
    //console.log (num[i]*2)
    nums2.push(nums[i]*2)
}
console.log(nums)
console.log(nums2)


const ani = ['cat','dog','turlte']
for (let i=0;i<ani,length;i++){
    console.log('привет',ani[i])
}
for (i in ani){
    console.log('привет',ani[i])
}

let k=0
while (k<10){
 console.log(k)
 k++
}

let r=0
let popit = 0
while (r!==95){
    r=Math.floor(Math.random()*100+1)
    console.log(r)
    popit++
}
console.log('попытка',popit) */

$('#butv').click(function (){
    f1('вода')
})
$('#butd').click(function (){
    f1('дерево')
})
$('#buto').click(function (){
    f1('огонь')
})
$('#butz').click(function (){
    f1('земля')
})
$('#butm').click(function (){
    f1('металл')
})

let guro = ''
let  student =''
const  turn = ['вода','дерево','огонь','земля','металл']
const win = ['водаогонь','водаметалл','деревоземля','деревовода','огоньметалл','огоньдерево','землявода','земляогонь','металлдерево','металлземля']
const loose = ['водадерево','водаземля','деревоогонь','деревометалл','огоньземля','огоньвода','земляметалл','землядерево','металлвода','металлогонь']
const draw = ['водавода','дереводерево','огоньогонь','земляземля','металлметалл']
let scoreh = 0
let scorec = 0

function start() {
    scoreh = 0
    scorec = 0
    $('#out2').text(+scoreh+':'+scorec)
    $('#out3').html('')
    $('#out').text('Ваш выбор')
    $('#out1').text('Выбор мастера')
}

function  f1(x){

    student=x
    let r=Math.floor(Math.random()*5)
    guro=turn[r]
    console.log(student,guro)
    $('#out').text('Ваш выбор - '+student)
    $('#out1').text('Выбор мастера - '+guro)

    proverka()
}
function proverka() {
    let result = student + guro
    if (win.includes(result)) {
        console.log('pobeda')
        $('#out3').text('--Следует признать, сейчас ты победил!')
        scoreh+=1
        $('#out2').text(+scoreh+':'+scorec)

     if  (scoreh == 3){
        $('#out3').html('--Мастер! Ты познал природу вещей !' + '<img src="PoklonMastera.jpg" alt="Поклон">' )
           setTimeout(function (){start()} ,3000)}
    }

    else if (loose.includes(result)) {
         console.log('ne povezlo')
        $('#out3').text('--Тебе не повезло, попробуй ещё раз!')
        scorec += 1
        $('#out2').text(+scoreh + ':' + scorec)

            if (scorec == 3){
            $('#out3').html('--Тренируйся больше, дорогу осилит идущий'+'<img src="Mastersmeh.jpg" alt="Смех">')
            setTimeout(function (){start()} ,3000)}
                }

    else {
               console.log('nichya')
                $('#out3').text('--Достойные соперники!')
            }}
  $(document).ready(start)
