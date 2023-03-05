let param ={
    'auth': '37A38D7d5b44Dd6D856478D8',
    'action': 1,
    'name': 'Oleksandr',
    'year': 1986
}

function queryString(param) {
    let path = `https://getpost.itgid.info/index2.php?`;
    for (let key in param){
        path += `${key}=${param[key]}&`;
    }
    return path.slice(0, -1);
}

// Task 1 ============================================
/* 
 <p>Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 1. </p>
<p>Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 2. </p>
<p>Два запроса объедините с помощью promiseAll. Результат выведите в out-1 результат. Запускаться функция
    должна по нажатию b-1.</p>
*/

function t1() {
        
    let a = new Promise((resolve, reject) => {
        param.action = 1;
        fetch(queryString(param))
            .then(data => {
                resolve(data.text());
            })
    });

    let b = new Promise((resolve, reject) => {
         param.action = 2;
        fetch(queryString(param))
            .then(data => {
                resolve(data.text());
            })
    });

    Promise.all([a, b]).then(value => {
        document.querySelector('.out-1').innerHTML = value;
    });
}

document.querySelector('.b-1').onclick = t1;

// Task 2 ============================================
/* 
 <p> Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 3. Добавьте
параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет сумму чисел.</p>
<p>Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 4.
Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет случайное число в
заданном
диапазоне.</p>
<p>Два запроса объедините с помощью promiseAll.
Выведите в out-2 результат. Запускаться функция должна по нажатию b-2. </p>

*/

function t2() {
      
    let a = new Promise((resolve, reject) => {
        param.action = 3;
        param.num1 = 100;
        param.num2 = 50;
        fetch(queryString(param))
            .then(data => {
                resolve(data.text());
            })
    });

    let b = new Promise((resolve, reject) => {
        param.action = 4;
        param.num1 = 100;
        param.num2 = 500;
        fetch(queryString(param))
            .then(data => {
                resolve(data.text());
            })
    });

    Promise.all([a, b]).then(value => {
        document.querySelector('.out-2').innerHTML = value;
    });
}

document.querySelector('.b-2').onclick = t2;

// Task 3 ============================================
/*  
<p> Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 5.
Если все сделано верно, сервер вернет текущее время и дату. Не забывайте указывать параметр auth (ключ в
чате). </p>
<p> Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 6.
Добавьте
параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет большее число.</p>
<p>Два
запроса объедините с помощью promiseAll.
Выведите в out-3 результат. Запускаться функция должна по нажатию b-3. </p>
                 */

function t3() {
  
    let a = new Promise((resolve, reject) => {
        param.action = 5;
        fetch(queryString(param))
            .then(data => {
                resolve(data.text());
            })
    });

    let b = new Promise((resolve, reject) => {
        param.action = 6;
        param.num1 = 1000;
        param.num2 = 500;
        fetch(queryString(param))
            .then(data => {
                resolve(data.text());
            })
    });

    Promise.all([a, b]).then(value => {
        document.querySelector('.out-3').innerHTML = value;
    });
}

document.querySelector('.b-3').onclick = t3;


// Task 4 ============================================
/*  
 <p> Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 7.
Если все
сделано верно, сервер случайную ссылку на изображение. Не забывайте указывать параметр auth (ключ в
чате). </p>
<p>Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 8. В
качестве параметра по очереди укажите year равный году вашего рождения. Если все правильно сервер вернет
ваш возраст.</p>
<p>Выведите в out-4 результат. Запускаться функция должна по нажатию b-4.</p>

*/

function t4() {
  
    let a = new Promise((resolve, reject) => {
        param.action = 7;
        fetch(queryString(param))
            .then(data => {
                resolve(data.text());
            })
    });

    let b = new Promise((resolve, reject) => {
        param.action = 8;
        fetch(queryString(param))
            .then(data => {
                resolve(data.text());
            })
    });

    Promise.all([a, b]).then(value => {
        document.querySelector('.out-4').innerHTML = value;
    });
}

document.querySelector('.b-4').onclick = t4;

// Task 5 ============================================
/*  
 <p>Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 1.</p>
<p>Отправьте
POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 2. </p>
<p>Два
запроса объедините с помощью promiseAll. Результат выведите в out-5 результат. Запускаться функция
должна по нажатию b-5.</p>
*/

function t5() {

    let a = new Promise((resolve, reject) => {
        param.action = 1;
        fetch(queryString(param), {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: queryString(param),
    })
        .then(response => {
            resolve(response.text());
        })
    });

    let b = new Promise((resolve, reject) => {
        param.action = 2;
        fetch(queryString(param), {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: queryString(param),
    })
        .then(response => {
            resolve(response.text());
        })
    });

    Promise.all([a, b]).then(value => {
        document.querySelector('.out-5').innerHTML = value;
    });
}

document.querySelector('.b-5').onclick = t5;

// Task 6 ============================================
/* 
 <p> Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 3.
    Добавьте
    параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет сумму чисел. </p>
<p>Отправьте POST
    запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 4.
    Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет случайное число в
    заданном
    диапазоне.</p>
<p> Два запроса объедините с помощью promiseAll.
    Выведите в
    out-6 результат. Запускаться функция должна по нажатию b-6. </p>
*/

function t6() {

    let a = new Promise((resolve, reject) => {
        param.action = 3;
        param.num1 = 15;
        param.num2 = 5;
        fetch(queryString(param), {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: queryString(param),
    })
        .then(response => {
            resolve(response.text());
        })
    });

    let b = new Promise((resolve, reject) => {
        param.action = 4;
        param.num1 = 111;
        param.num2 = 333;
        fetch(queryString(param), {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: queryString(param),
    })
        .then(response => {
            resolve(response.text());
        })
    });

    Promise.all([a, b]).then(value => {
        document.querySelector('.out-6').innerHTML = value;
    });
}

document.querySelector('.b-6').onclick = t6;


// Task 7 ============================================
/*  
 <p> Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 5.
Если все сделано верно, сервер вернет текущее время и дату. Не забывайте указывать параметр auth (ключ в
чате).</p>
<p>Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 6.
Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет большее число.</p>
<p>Два запроса объедините с помощью promiseAll.
Выведите в out-7 результат. Запускаться функция должна по нажатию b-7. </p>

*/

function t7() {

    let a = new Promise((resolve, reject) => {
        param.action = 5;
        fetch(queryString(param), {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: queryString(param),
    })
        .then(response => {
            resolve(response.text());
        })
    });

    let b = new Promise((resolve, reject) => {
        param.action = 6;
        param.num1 = 1111;
        param.num2 = 3333;
        fetch(queryString(param), {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: queryString(param),
    })
        .then(response => {
            resolve(response.text());
        })
    });

    Promise.all([a, b]).then(value => {
        document.querySelector('.out-7').innerHTML = value;
    });
}

document.querySelector('.b-7').onclick = t7;

// Task 8 ============================================
/* 
<p> Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 7.
Если все сделано верно, сервер случайную ссылку на изображение. Не забывайте указывать параметр auth
(ключ в
чате).</p>
<p>Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 8. В
качестве параметра по очереди укажите year равный году вашего рождения. Если все правильно сервер вернет
ваш возраст.</p>
<p>Два запроса объедините с помощью promiseAll. Выведите в out-8 результат. Запускаться функция должна по
нажатию b-8.</p>
*/

function t8() {

    let a = new Promise((resolve, reject) => {
        param.action = 7;
        fetch(queryString(param), {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: queryString(param),
    })
        .then(response => {
            resolve(response.text());
        })
    });

    let b = new Promise((resolve, reject) => {
        param.action = 8;
        fetch(queryString(param), {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: queryString(param),
    })
        .then(response => {
            resolve(response.text());
        })
    });

    Promise.all([a, b]).then(value => {
        document.querySelector('.out-8').innerHTML = value;
    });
}

document.querySelector('.b-8').onclick = t8;

