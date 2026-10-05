/* =========================================================
   AKTO II — La Disiĝo · Разрыв (2013)
   Версия 11.4 — с уроками 8–12,
   сквозной улыбкой Дарины и именем клуба
   ========================================================= */
window.STORY = window.STORY || {};
window.STORY.act2 = {
  title: 'Акт II — La Disiĝo',
  scenes: [

    /* =====================================================
       СЦЕНА 1: ВЕСНА 2013 — тёплое утро
       ===================================================== */
    {
      id: 'spring',
      steps: [
        { t: 'line', text: '── Akto II · La Disiĝo ──', cls: 'sys' },
        { t: 'line', text: 'Jaro 2013 · Весна', cls: 'sys' },
        { t: 'wait', ms: 1200 },
        { t: 'track', name: 'spring', fade: 3 },
        { t: 'saySweet', text: 'Тебе девятнадцать. Ты стоишь в дверях класса, который сама же и ведёшь.' },
        { t: 'wait', ms: 700 },
        { t: 'saySweet', text: 'Пять ребят. Семь лет. Они читают по очереди.' },
        { t: 'wait', ms: 600 },
        { t: 'say', eo: 'Bone, Mirko. Nun vi.', ru: 'Хорошо, Мирко. Теперь ты.', speed: 40 },
        { t: 'wait', ms: 500 },
        { t: 'say', eo: 'Saluton, sinjorino Anna!', ru: 'Привет, госпожа Анна!', speed: 50 },
        { t: 'wait', ms: 700 },
        { t: 'line', text: 'Ты смеёшься. Ты давно перестала краснеть, когда тебя так называют.', cls: 'ru-muted' },
        { t: 'wait', ms: 500 },
        { t: 'saySweet', text: 'В углу — Дарина. Она пришла с работы пораньше, чтобы послушать.' },
        { t: 'wait', ms: 600 },
        { t: 'line', text: 'У неё в руках пакет с апельсинами. И маленькая коробка.', cls: 'ru-muted' },
        { t: 'wait', ms: 500 },
        { t: 'say', eo: 'Por la infanoj.', ru: 'Для детей.', speed: 45 },
        { t: 'wait', ms: 400 },
        { t: 'line', text: 'Ребята бегут к ней — как к бабушке, которой у них никогда не было.', cls: 'ru-muted' },
        { t: 'wait', ms: 700 },
        { t: 'smile', text: 'Дарина смеётся. У неё — всё та же широкая, красивая улыбка. Такая, что дети невольно улыбаются в ответ.' },
        { t: 'wait', ms: 900 },
        { t: 'saySweet', text: 'Ты смотришь на них и думаешь: вот оно. Вот оно, настоящее.' },
        { t: 'wait', ms: 900 },
        { t: 'line', text: 'Три года назад ты была одна. Сейчас — нет.', cls: 'ru-muted' },
        { t: 'wait', ms: 900 },
        { t: 'line', text: 'Клуб всё ещё жив. Пока — жив.', cls: 'ru-muted' },
        { t: 'wait', ms: 1000 },
        { t: 'word', word: 'klubo', translation: 'клуб' },
        { t: 'wait', ms: 900 }
      ]
    },

    /* =====================================================
       СЦЕНА 2: УРОК 8 — МНОЖЕСТВЕННОЕ ЧИСЛО И ВИНИТЕЛЬНЫЙ
       ===================================================== */
    {
      id: 'lesson8',
      steps: [
        { t: 'line', text: '' },
        { t: 'track', name: 'morning', fade: 2 },
        { t: 'saySweet', text: 'Мирко поднимает руку. У него вопрос.' },
        { t: 'wait', ms: 500 },
        { t: 'say', eo: 'Sinjorino Anna, kial «lernantojn» kaj ne «lernantoj»?', ru: 'Госпожа Анна, почему «lernantojn», а не «lernantoj»?', speed: 35 },
        { t: 'wait', ms: 600 },
        { t: 'line', text: 'Ты улыбаешься. Значит, урок был не зря.', cls: 'ru-muted' },
        { t: 'wait', ms: 500 },

        { t: 'lesson', title: 'LECIONO 8 · Pluralo kaj akuzativo', subtitle: 'Множественное число + винительный падеж' },

        { t: 'rule',
          text: 'Существительное + -j = много. Существительное + -n = объект.',
          ru: 'Вместе: -j + -n → -jn. Это и множественное, и объект одновременно.'
        },
        { t: 'wait', ms: 500 },

        { t: 'examples', items: [
          { eo: 'lernanto — ученик', ru: 'один' },
          { eo: 'lernantoj — ученики', ru: 'много' },
          { eo: 'lernanton — ученика', ru: 'объект, один' },
          { eo: 'lernantojn — учеников', ru: 'объект, много' }
        ] },

        { t: 'rule',
          text: 'После глаголов восприятия всегда -n.',
          ru: 'vidi (видеть), aŭdi (слышать), ami (любить), atendi (ждать) — все требуют -n на объекте.'
        },
        { t: 'wait', ms: 500 },

        { t: 'exercise',
          kind: 'translate',
          q: 'Как сказать «Я вижу друзей»?',
          hint: 'amiko → amikojn. Не забудь окончание -n.',
          answers: ['mi vidas amikojn'],
          onCorrect: 'Ĝuste.',
          onWrong: 'Ne tute. Mi vidas amikojn.',
          answer: 'Mi vidas amikojn.',
          answerRu: 'Я вижу друзей.',
          word: 'amikojn', translation: 'друзей (вин. мн.)'
        },

        { t: 'exercise',
          kind: 'fill',
          q: 'Вставь окончание: «Mi aŭdas birdo__».',
          hint: 'Птицы — множественное, объект. Два окончания подряд.',
          answers: ['jn', 'birdojn', 'mi aŭdas birdojn'],
          onCorrect: 'Ĝuste. Mi aŭdas birdojn.',
          onWrong: 'Ne tute. Правильно — birdojn.',
          answer: 'birdojn'
        },

        { t: 'exercise',
          kind: 'choose',
          q: 'Какое предложение правильное?',
          opts: [
            { label: 'Mi atendas amikoj', correct: false },
            { label: 'Mi atendas amikojn', correct: true },
            { label: 'Mi atendas amikon', correct: false }
          ],
          onCorrect: 'Ĝuste. Объект во множественном — amikojn.',
          onWrong: 'Ne tute. Я жду друзей = mi atendas amikojn.'
        },

        { t: 'wait', ms: 500 },
        { t: 'saySweet', text: 'Мирко кивает. Он понял.' },
        { t: 'wait', ms: 400 },
        { t: 'line', text: 'Ты смотришь на детей и думаешь: они запомнят это на всю жизнь.', cls: 'ru-muted' },
        { t: 'wait', ms: 700 },
        { t: 'lessonDone', id: 'lesson8' },
        { t: 'wait', ms: 900 }
      ]
    },

    /* =====================================================
       СЦЕНА 3: КОФЕ УТРОМ
       ===================================================== */
    {
      id: 'morning_coffee',
      steps: [
        { t: 'line', text: '' },
        { t: 'track', name: 'warm', fade: 2.5 },
        { t: 'saySweet', text: 'Раннее утро. Ты пришла раньше всех.' },
        { t: 'wait', ms: 700 },
        { t: 'saySweet', text: 'На кухне — Максим. Он всегда приходит первым. Ставит чайник.' },
        { t: 'wait', ms: 600 },
        { t: 'say', eo: 'Bonan matenon, Anna.', ru: 'Доброе утро, Анна.', speed: 40 },
        { t: 'wait', ms: 500 },
        { t: 'line', text: 'Он варит кофе — для двоих. И ставит вторую чашку на стол, где обычно садится Дарина.', cls: 'ru-muted' },
        { t: 'wait', ms: 700 },
        { t: 'say', eo: 'Kafo?', ru: 'Кофе?', speed: 55 },
        { t: 'wait', ms: 400 },
        { t: 'word', word: 'kafo', translation: 'кофе' },
        { t: 'say', eo: 'Jes, dankon.', ru: 'Да, спасибо.', speed: 50 },
        { t: 'wait', ms: 700 },
        { t: 'line', text: 'Ты садишься напротив. Он молчит, читает газету.', cls: 'ru-muted' },
        { t: 'wait', ms: 600 },
        { t: 'saySweet', text: 'Это его обычное состояние — молчать рядом. И это правильно.' },
        { t: 'wait', ms: 700 },
        { t: 'line', text: 'Ты говоришь ему: «Я веду группу уже три года».', cls: 'ru-muted' },
        { t: 'wait', ms: 500 },
        { t: 'say', eo: 'Mi scias.', ru: 'Я знаю.', speed: 45 },
        { t: 'wait', ms: 400 },
        { t: 'say', eo: 'Kaj mi fieras pri vi.', ru: 'И я горжусь тобой.', speed: 35 },
        { t: 'wait', ms: 800 },
        { t: 'line', text: 'Он говорит это спокойно. Как будто констатирует факт — как погоду.', cls: 'ru-muted' },
        { t: 'wait', ms: 700 },
        { t: 'saySweet', text: 'Ты опускаешь глаза. В тетради, которую ты держишь, — новое сердце.' },
        { t: 'wait', ms: 500 },
        { t: 'line', text: 'Сто тридцать четвёртое.', cls: 'ru-muted' },
        { t: 'wait', ms: 800 },

        { t: 'line', text: 'Дверь открывается. Дарина. С зонтом — дождь на улице.', cls: 'ru-muted' },
        { t: 'wait', ms: 500 },
        { t: 'say', eo: 'Bonan matenon, amikoj.', ru: 'Доброе утро, друзья.', speed: 45 },
        { t: 'wait', ms: 500 },
        { t: 'smile', text: 'Она улыбается — широко, как всегда. Зонт капает на пол, но ей всё равно.' },
        { t: 'wait', ms: 600 },
        { t: 'line', text: 'Максим поднимает на неё глаза. Молча. И — улыбается в ответ. Коротко. Только для неё.', cls: 'ru-muted' },
        { t: 'wait', ms: 700 },
        { t: 'memory', label: 'La mateno' },
        { t: 'wait', ms: 900 }
      ]
    },

    /* =====================================================
       СЦЕНА 4: УРОК 9 — ПРОШЕДШЕЕ ВРЕМЯ
       ===================================================== */
    {
      id: 'lesson9',
      steps: [
        { t: 'line', text: '' },
        { t: 'track', name: 'evening', fade: 2.5 },
        { t: 'saySweet', text: 'После уроков вы сидите втроём. Максим листает старую тетрадь.' },
        { t: 'wait', ms: 600 },
        { t: 'say', eo: 'Hieraŭ ni parolis pri la estonteco. Hodiaŭ — pri la pasinteco.', ru: 'Вчера мы говорили о будущем. Сегодня — о прошлом.', speed: 35 },
        { t: 'wait', ms: 500 },
        { t: 'say', eo: 'Kiel diri «mi legis» anstataŭ «mi legas»?', ru: 'Как сказать «я читал» вместо «я читаю»?', speed: 35 },
        { t: 'wait', ms: 500 },

        { t: 'lesson', title: 'LECIONO 9 · Pasinta tempo', subtitle: 'Прошедшее время (-is)' },

        { t: 'rule',
          text: 'Настоящее — -as. Прошедшее — -is. Заменяем окончание, корень не трогаем.',
          ru: 'legas → legis. Mi legas (читаю) → Mi legis (читал).'
        },
        { t: 'wait', ms: 500 },

        { t: 'examples', items: [
          { eo: 'mi estis', ru: 'я был' },
          { eo: 'vi legis', ru: 'ты читал' },
          { eo: 'li vidis', ru: 'он видел' },
          { eo: 'ŝi venis', ru: 'она пришла' },
          { eo: 'ni parolis', ru: 'мы говорили' },
          { eo: 'ili iris', ru: 'они пошли' }
        ] },

        { t: 'rule',
          text: 'Прошедшее время не зависит от лица — как и настоящее.',
          ru: 'mi estis = vi estis = li estis = ni estis. Одна форма для всех.'
        },
        { t: 'wait', ms: 500 },

        { t: 'exercise',
          kind: 'translate',
          q: 'Как сказать «Я был здесь»?',
          hint: 'mi + estis + tie.',
          answers: ['mi estis tie'],
          onCorrect: 'Ĝuste.',
          onWrong: 'Ne tute. Mi estis tie.',
          answer: 'Mi estis tie.',
          answerRu: 'Я был здесь.',
          word: 'estis', translation: 'был (прош.)'
        },

        { t: 'exercise',
          kind: 'fill',
          q: 'Замени окончание: «Mi leg__ libron» (прошедшее).',
          hint: 'Настоящее — legas. Вставь -is.',
          answers: ['is', 'legis', 'mi legis libron'],
          onCorrect: 'Ĝuste. Mi legis libron.',
          onWrong: 'Ne tute. Mi legis libron.',
          answer: 'legis'
        },

        { t: 'exercise',
          kind: 'choose',
          q: 'Как сказать «Они говорили»?',
          opts: [
            { label: 'ili parolas', correct: false },
            { label: 'ili parolis', correct: true },
            { label: 'ili parolos', correct: false }
          ],
          onCorrect: 'Ĝuste. -is — прошедшее.',
          onWrong: 'Ne tute. Ili parolis.'
        },

        { t: 'wait', ms: 500 },
        { t: 'saySweet', text: 'Максим закрывает тетрадь. На секунду он задумывается.' },
        { t: 'wait', ms: 500 },
        { t: 'say', eo: 'Antaŭ multaj jaroj, mi estis sola.', ru: 'Много лет назад я был один.', speed: 30 },
        { t: 'wait', ms: 500 },
        { t: 'say', eo: 'Poste venis Darina.', ru: 'Потом пришла Дарина.', speed: 35 },
        { t: 'wait', ms: 500 },
        { t: 'say', eo: 'Kaj poste — vi.', ru: 'А потом — ты.', speed: 40 },
        { t: 'wait', ms: 800 },
        { t: 'line', text: 'Дарина улыбается. Молча. Просто смотрит на него.', cls: 'ru-muted' },
        { t: 'wait', ms: 500 },
        { t: 'smile', text: 'Но это не та улыбка, что для детей. Это улыбка для него. Тихая. Долгая.' },
        { t: 'wait', ms: 700 },
        { t: 'lessonDone', id: 'lesson9' },
        { t: 'wait', ms: 900 }
      ]
    },

    /* =====================================================
       СЦЕНА 5: ПИСЬМО ОБ АРЕНДЕ
       ===================================================== */
    {
      id: 'rent_letter',
      steps: [
        { t: 'line', text: '' },
        { t: 'track', name: 'sad', fade: 2.5 },
        { t: 'line', text: '── POSTE · Позже ──', cls: 'sys' },
        { t: 'wait', ms: 900 },
        { t: 'saySweet', text: 'Почтальон приносит конверт. Без марки. Из управы.' },
        { t: 'wait', ms: 700 },
        { t: 'line', text: 'Ты открываешь. Внутри — короткое письмо.', cls: 'ru-muted' },
        { t: 'wait', ms: 500 },
        { t: 'line', text: '«С 1 июля 2013 года арендная плата за помещение повышается в три раза».', cls: 'ru' },
        { t: 'wait', ms: 900 },
        { t: 'line', text: 'Ты перечитываешь. Три раза.', cls: 'ru-muted' },
        { t: 'wait', ms: 700 },
        { t: 'line', text: '«В три раза».', cls: 'ru-muted' },
        { t: 'wait', ms: 900 },
        { t: 'saySweet', text: 'Максим берёт письмо. Читает медленно, будто по слогам.' },
        { t: 'wait', ms: 600 },
        { t: 'say', eo: 'Trioble.', ru: 'В три раза.', speed: 60 },
        { t: 'wait', ms: 700 },
        { t: 'say', eo: 'Ni ne povas pagi tion.', ru: 'Мы не можем это заплатить.', speed: 35 },
        { t: 'wait', ms: 800 },
        { t: 'line', text: 'Дарина стоит рядом. Молчит. У неё в руках тряпка — она как раз протирала полки.', cls: 'ru-muted' },
        { t: 'wait', ms: 700 },
        { t: 'say', eo: 'Kiom da tempo ni havas?', ru: 'Сколько у нас времени?', speed: 40 },
        { t: 'wait', ms: 500 },
        { t: 'say', eo: 'Du monatoj.', ru: 'Два месяца.', speed: 45 },
        { t: 'wait', ms: 1000 },
        { t: 'line', text: '' },
        { t: 'line', text: 'Ты выходишь на улицу. Садишься на крыльцо.', cls: 'ru-muted' },
        { t: 'wait', ms: 700 },
        { t: 'saySweet', text: 'Впервые за три года ты чувствуешь, как холодно.' },
        { t: 'wait', ms: 1000 },
        { t: 'memory', label: 'La letero' },
        { t: 'wait', ms: 900 }
      ]
    },

    /* =====================================================
       СЦЕНА 6: ПОПЫТКИ СПАСТИ
       ===================================================== */
    {
      id: 'trying_to_save',
      steps: [
        { t: 'line', text: '' },
        { t: 'track', name: 'tense', fade: 2.5 },
        { t: 'line', text: '── MAJO · Май ──', cls: 'sys' },
        { t: 'wait', ms: 900 },
        { t: 'saySweet', text: 'Они пытаются спасти клуб. Все трое.' },
        { t: 'wait', ms: 600 },
        { t: 'line', text: 'Максим пишет письма — в управу, в газеты, в мэрию.', cls: 'ru-muted' },
        { t: 'wait', ms: 500 },
        { t: 'line', text: 'Дарина ищет спонсоров. Обходит все соседние магазины.', cls: 'ru-muted' },
        { t: 'wait', ms: 500 },
        { t: 'line', text: 'Ты ведёшь группу и молчишь. Тебе нечего предложить.', cls: 'ru-muted' },
        { t: 'wait', ms: 800 },
        { t: 'saySweet', text: 'Каждое утро Максим возвращается с пустыми руками.' },
        { t: 'wait', ms: 600 },
        { t: 'saySweet', text: 'Каждое утро Дарина улыбается и говорит: «Сегодня получится».' },
        { t: 'wait', ms: 500 },
        { t: 'smile', text: 'И каждый раз — эта широкая, красивая улыбка. Ты не понимаешь, откуда у неё столько сил.' },
        { t: 'wait', ms: 700 },
        { t: 'saySweet', text: 'Каждое утро ты веришь ей. И — не веришь.' },
        { t: 'wait', ms: 900 },
        { t: 'line', text: '' },
        { t: 'saySweet', text: 'Однажды вечером ты застаёшь их на кухне.' },
        { t: 'wait', ms: 600 },
        { t: 'line', text: 'Дарина плачет. Молча. Максим держит её за руку.', cls: 'ru-muted' },
        { t: 'wait', ms: 600 },
        { t: 'line', text: 'Они не говорят друг другу ничего. Просто сидят.', cls: 'ru-muted' },
        { t: 'wait', ms: 800 },
        { t: 'saySweet', text: 'Ты тихо уходишь. Закрываешь дверь.' },
        { t: 'wait', ms: 1000 }
      ]
    },

    /* =====================================================
       СЦЕНА 7: УРОК 10 — СУФФИКСЫ -IG- И -IĜ-
       ===================================================== */
    {
      id: 'lesson10',
      steps: [
        { t: 'line', text: '' },
        { t: 'track', name: 'evening', fade: 2.5 },
        { t: 'saySweet', text: 'Ты всё ещё ведёшь уроки. Дети не должны ничего знать.' },
        { t: 'wait', ms: 600 },
        { t: 'say', eo: 'Hodiaŭ — novaj sufiksoj.', ru: 'Сегодня — новые суффиксы.', speed: 40 },
        { t: 'wait', ms: 500 },

        { t: 'lesson', title: 'LECIONO 10 · Sufiksoj -ig- kaj -iĝ-', subtitle: 'Заставить и стать' },

        { t: 'rule',
          text: '-ig- = «заставить что-то делать». -iĝ- = «стать чем-то сам»',
          ru: 'Это парные суффиксы. Очень продуктивные — из них строят сотни слов.'
        },
        { t: 'wait', ms: 500 },

        { t: 'examples', items: [
          { eo: 'pura — чистый', ru: 'основа' },
          { eo: 'purigi — чистить', ru: 'заставить быть чистым' },
          { eo: 'puriĝi — очищаться', ru: 'стать чистым сам' },
          { eo: 'ruĝa — красный', ru: 'основа' },
          { eo: 'ruĝigi — красить в красный', ru: 'сделать красным' },
          { eo: 'ruĝiĝi — краснеть', ru: 'стать красным' }
        ] },

        { t: 'rule',
          text: 'С -ig- подлежащее действует на объект. С -iĝ- подлежащее меняется само.',
          ru: 'Mi purigas la tablon — я чищу стол. La tablo puriĝas — стол очищается.'
        },
        { t: 'wait', ms: 500 },

        { t: 'exercise',
          kind: 'translate',
          q: 'Как из «pura» сделать «чистить»?',
          hint: 'Корень pur- + суффикс заставить + окончание -i.',
          answers: ['purigi'],
          onCorrect: 'Ĝuste.',
          onWrong: 'Ne tute. Purigi.',
          answer: 'Purigi.',
          answerRu: 'Чистить.',
          word: 'purigi', translation: 'чистить'
        },

        { t: 'exercise',
          kind: 'translate',
          q: 'Как из «ruĝa» сделать «краснеть»?',
          hint: 'Корень ruĝ- + суффикс стать + -i.',
          answers: ['ruĝiĝi', 'rugigi', 'rugxigxi'],
          onCorrect: 'Ĝuste.',
          onWrong: 'Ne tute. Ruĝiĝi.',
          answer: 'Ruĝiĝi.',
          answerRu: 'Краснеть.',
          word: 'ruĝiĝi', translation: 'краснеть'
        },

        { t: 'exercise',
          kind: 'choose',
          q: 'Что значит «grandiĝi»?',
          opts: [
            { label: 'увеличивать что-то', correct: false },
            { label: 'становиться большим', correct: true },
            { label: 'быть большим', correct: false }
          ],
          onCorrect: 'Ĝuste. -iĝ- значит «становиться».',
          onWrong: 'Ne tute. Grandiĝi = становиться большим.'
        },

        { t: 'wait', ms: 500 },
        { t: 'saySweet', text: 'После урока Дарина подходит. Кладёт руку тебе на плечо.' },
        { t: 'wait', ms: 500 },
        { t: 'say', eo: 'Vi estas bona instruisto.', ru: 'Ты хорошая учительница.', speed: 40 },
        { t: 'wait', ms: 500 },
        { t: 'say', eo: 'Vi restos. Ĉu?', ru: 'Ты останешься. Да?', speed: 45 },
        { t: 'wait', ms: 700 },
        { t: 'smile', text: 'Она улыбается. И в этой улыбке столько надежды, что становится больно.' },
        { t: 'wait', ms: 600 },
        { t: 'line', text: 'Ты киваешь. Ты знаешь: это ложь. Но не можешь сказать ей правду.', cls: 'ru-muted' },
        { t: 'wait', ms: 700 },
        { t: 'lessonDone', id: 'lesson10' },
        { t: 'wait', ms: 900 }
      ]
    },

    /* =====================================================
       СЦЕНА 8: ПОСЛЕДНЯЯ СУББОТА
       ===================================================== */
    {
      id: 'last_saturday',
      steps: [
        { t: 'line', text: '' },
        { t: 'track', name: 'memory', fade: 3 },
        { t: 'line', text: '── SABATO · Суббота ──', cls: 'sys' },
        { t: 'wait', ms: 900 },
        { t: 'saySweet', text: 'Последняя суббота июня. Восемь ребят. Все пришли.' },
        { t: 'wait', ms: 600 },
        { t: 'saySweet', text: 'Ты знаешь, что это — последний урок.' },
        { t: 'wait', ms: 500 },
        { t: 'saySweet', text: 'Они — не знают.' },
        { t: 'wait', ms: 900 },
        { t: 'say', eo: 'Hodiaŭ ni lernos novan vorton.', ru: 'Сегодня мы выучим новое слово.', speed: 40 },
        { t: 'wait', ms: 500 },
        { t: 'say', eo: 'Ĝi estas «amikeco».', ru: 'Это — «дружба».', speed: 45 },
        { t: 'wait', ms: 600 },
        { t: 'word', word: 'amikeco', translation: 'дружба' },
        { t: 'wait', ms: 500 },
        { t: 'line', text: 'Ты объясняешь им разницу между amiko и amikeco. Друг и дружба.', cls: 'ru-muted' },
        { t: 'wait', ms: 500 },
        { t: 'line', text: 'Мирко поднимает руку: «А дружба — это навсегда?»', cls: 'ru-muted' },
        { t: 'wait', ms: 700 },
        { t: 'line', text: 'Ты молчишь. Потом говоришь:', cls: 'ru-muted' },
        { t: 'wait', ms: 400 },
        { t: 'say', eo: 'Jes. Amikeco restas.', ru: 'Да. Дружба остаётся.', speed: 30 },
        { t: 'wait', ms: 800 },
        { t: 'saySweet', text: 'Ты врёшь. Ты сама не веришь в это.' },
        { t: 'wait', ms: 700 },
        { t: 'saySweet', text: 'Но они верят. И этого достаточно.' },
        { t: 'wait', ms: 900 },
        { t: 'line', text: '' },
        { t: 'saySweet', text: 'После урока Дарина раздаёт апельсины. Максим фотографирует всех на плёнку.' },
        { t: 'wait', ms: 600 },
        { t: 'saySweet', text: 'Ты стоишь в центре. Улыбаешься.' },
        { t: 'wait', ms: 500 },
        { t: 'smile', text: 'Дарина рядом — с той самой улыбкой. Широкой, красивой. Такой, что фотография не передаст.' },
        { t: 'wait', ms: 700 },
        { t: 'line', text: 'Это фото будет висеть в твоей комнате ещё долго.', cls: 'ru-muted' },
        { t: 'wait', ms: 900 },
        { t: 'line', text: 'Ты не знаешь, что уже через год ты будешь смотреть на него по вечерам.', cls: 'ru-muted' },
        { t: 'wait', ms: 1000 },
        { t: 'memory', label: 'La lasta sabato' },
        { t: 'wait', ms: 900 }
      ]
    },

    /* =====================================================
       СЦЕНА 9: ПОСЛЕДНИЙ ДЕНЬ КЛУБА
       ===================================================== */
    {
      id: 'closing_day',
      steps: [
        { t: 'line', text: '' },
        { t: 'track', name: 'grief', fade: 3 },
        { t: 'line', text: '── 1 JULIO · 1 июля ──', cls: 'sys' },
        { t: 'wait', ms: 1000 },
        { t: 'saySweet', text: 'Ключи нужно сдать сегодня. До шести вечера.' },
        { t: 'wait', ms: 700 },
        { t: 'saySweet', text: 'Они снимают со стен портреты. Складывают книги в коробки.' },
        { t: 'wait', ms: 600 },
        { t: 'saySweet', text: 'Дарина аккуратно сматывает зелёную звезду с гвоздя.' },
        { t: 'wait', ms: 600 },
        { t: 'line', text: 'Она держит её в руках. Долго. Не отпускает.', cls: 'ru-muted' },
        { t: 'wait', ms: 700 },
        { t: 'say', eo: 'Kion ni faru kun ĝi?', ru: 'Что нам с ней делать?', speed: 40 },
        { t: 'wait', ms: 500 },
        { t: 'say', eo: 'Konservu ĝin.', ru: 'Сохрани её.', speed: 40 },
        { t: 'wait', ms: 500 },
        { t: 'say', eo: 'Por kio?', ru: 'Зачем?', speed: 45 },
        { t: 'wait', ms: 700 },

        { t: 'saySweet', text: 'Максим не отвечает сразу. Он смотрит на Дарину.' },
        { t: 'wait', ms: 600 },
        { t: 'say', eo: 'Ĉar ni estas «Vulpeto Abeleto».', ru: 'Потому что мы — «Вульпето Абелето».', speed: 35 },
        { t: 'wait', ms: 600 },
        { t: 'clubname', text: 'VULPETO ABELETO.' },
        { t: 'wait', ms: 800 },
        { t: 'say', eo: 'Ŝi estas la vulpeto.', ru: 'Она — лисёнок.', speed: 40 },
        { t: 'wait', ms: 500 },
        { t: 'line', text: '— говорит он и смотрит на Дарину.', cls: 'ru-muted' },
        { t: 'wait', ms: 400 },
        { t: 'say', eo: 'Kaj vi... vi estas la abeleto.', ru: 'А ты... ты — пчёлка.', speed: 40 },
        { t: 'wait', ms: 500 },
        { t: 'say', eo: 'Ĉiam.', ru: 'Всегда.', speed: 50 },
        { t: 'wait', ms: 800 },
        { t: 'line', text: 'Дарина не улыбается. Впервые за долгое время — не улыбается.', cls: 'ru-muted' },
        { t: 'wait', ms: 600 },
        { t: 'line', text: 'Она просто держит звезду в руках. И молчит.', cls: 'ru-muted' },
        { t: 'wait', ms: 800 },

        { t: 'saySweet', text: 'Ты упаковываешь детские тетради. Восемь штук.' },
        { t: 'wait', ms: 500 },
        { t: 'saySweet', text: 'В каждой — сердечки на полях. Ты знаешь, чьи.' },
        { t: 'wait', ms: 700 },
        { t: 'line', text: 'Твоя собственная — самая старая. В ней сто тридцать четыре сердца.', cls: 'ru-muted' },
        { t: 'wait', ms: 600 },
        { t: 'line', text: 'Ты кладёшь её отдельно. В свой рюкзак.', cls: 'ru-muted' },
        { t: 'wait', ms: 900 },
        { t: 'line', text: '' },
        { t: 'saySweet', text: 'В пять тридцать приходит управдом. Молчаливый. Забирает ключи.' },
        { t: 'wait', ms: 700 },
        { t: 'saySweet', text: 'Дверь закрывается. Изнутри больше никого нет.' },
        { t: 'wait', ms: 900 },
        { t: 'line', text: 'Вы стоите на крыльце втроём.', cls: 'ru-muted' },
        { t: 'wait', ms: 500 },
        { t: 'line', text: 'Дарина. Максим. Ты.', cls: 'ru-muted' },
        { t: 'wait', ms: 1000 },
        { t: 'line', text: 'Молчите.', cls: 'ru-muted' },
        { t: 'wait', ms: 1200 },
        { t: 'memory', label: 'La lasta tago' },
        { t: 'wait', ms: 900 }
      ]
    },

    /* =====================================================
       СЦЕНА 10: УРОК 11 — БУДУЩЕЕ ВРЕМЯ
       ===================================================== */
    {
      id: 'lesson11',
      steps: [
        { t: 'line', text: '' },
        { t: 'track', name: 'lullaby', fade: 2.5 },
        { t: 'line', text: '── AŬGUSTO · Август ──', cls: 'sys' },
        { t: 'wait', ms: 1000 },
        { t: 'saySweet', text: 'Август. Уже без клуба. Ты иногда встречаешься с Максимом.' },
        { t: 'wait', ms: 600 },
        { t: 'say', eo: 'Anna, vi scias la estontecon?', ru: 'Анна, ты знаешь будущее время?', speed: 40 },
        { t: 'wait', ms: 500 },
        { t: 'say', eo: 'Ni ripetu.', ru: 'Повторим.', speed: 45 },
        { t: 'wait', ms: 500 },

        { t: 'lesson', title: 'LECIONO 11 · Estonta tempo', subtitle: 'Будущее время (-os)' },

        { t: 'rule',
          text: 'Будущее время — окончание -os.',
          ru: 'legas → legis → legos. Читаю → читал → буду читать.'
        },
        { t: 'wait', ms: 500 },

        { t: 'examples', items: [
          { eo: 'mi estos', ru: 'я буду' },
          { eo: 'vi venos', ru: 'ты придёшь' },
          { eo: 'li parolos', ru: 'он будет говорить' },
          { eo: 'ni lernos', ru: 'мы будем учить' },
          { eo: 'ili vidos', ru: 'они увидят' }
        ] },

        { t: 'rule',
          text: 'В эсперанто всего три времени и три наклонения. Больше ничего не нужно.',
          ru: '-as (сейчас), -is (раньше), -os (потом), -us (бы), -u (давай), -i (инфинитив).'
        },
        { t: 'wait', ms: 500 },

        { t: 'exercise',
          kind: 'translate',
          q: 'Как сказать «Я буду учиться»?',
          hint: 'lerni → lernos. mi + lernos.',
          answers: ['mi lernos'],
          onCorrect: 'Ĝuste.',
          onWrong: 'Ne tute. Mi lernos.',
          answer: 'Mi lernos.',
          answerRu: 'Я буду учиться.',
          word: 'lernos', translation: 'буду учиться'
        },

        { t: 'exercise',
          kind: 'fill',
          q: 'Замени окончание: «Ni vid__ nin baldaŭ» (будущее).',
          hint: 'vid- + окончание будущего.',
          answers: ['os', 'vidos', 'ni vidos nin baldaŭ'],
          onCorrect: 'Ĝuste. Ni vidos nin baldaŭ.',
          onWrong: 'Ne tute. Ni vidos nin baldaŭ.',
          answer: 'vidos'
        },

        { t: 'exercise',
          kind: 'choose',
          q: 'Как сказать «Он вернётся»?',
          opts: [
            { label: 'li revenas', correct: false },
            { label: 'li revenis', correct: false },
            { label: 'li revenos', correct: true }
          ],
          onCorrect: 'Ĝuste. -os — будущее.',
          onWrong: 'Ne tute. Li revenos.'
        },

        { t: 'wait', ms: 500 },
        { t: 'saySweet', text: 'Максим смотрит в окно. Долго. Молчит.' },
        { t: 'wait', ms: 600 },
        { t: 'say', eo: 'Mi revenos, Anna.', ru: 'Я вернусь, Анна.', speed: 35 },
        { t: 'wait', ms: 600 },
        { t: 'say', eo: 'Post unu jaro. Eble du.', ru: 'Через год. Может, через два.', speed: 35 },
        { t: 'wait', ms: 900 },
        { t: 'line', text: 'Он говорит это спокойно. Но ты слышишь: он сам не верит.', cls: 'ru-muted' },
        { t: 'wait', ms: 900 },
        { t: 'lessonDone', id: 'lesson11' },
        { t: 'wait', ms: 900 }
      ]
    },

    /* =====================================================
       СЦЕНА 11: РЕШЕНИЕ МАКСИМА
       ===================================================== */
    {
      id: 'moscow',
      steps: [
        { t: 'line', text: '' },
        { t: 'track', name: 'sad', fade: 2.5 },
        { t: 'saySweet', text: 'Тебе звонят из Москвы. Точнее — Максиму звонят.' },
        { t: 'wait', ms: 700 },
        { t: 'saySweet', text: 'Тебе рассказывают об этом по телефону. Дарина.' },
        { t: 'wait', ms: 600 },
        { t: 'line', text: 'Он нашёл работу. Программистом. В крупной компании.', cls: 'ru-muted' },
        { t: 'wait', ms: 500 },
        { t: 'line', text: 'Переезд — через две недели.', cls: 'ru-muted' },
        { t: 'wait', ms: 900 },
        { t: 'line', text: 'Ты приезжаешь. Квартира, где он снимает комнату.', cls: 'ru-muted' },
        { t: 'wait', ms: 500 },
        { t: 'line', text: 'Уже упакованные коробки. Он стоит посреди них. Один.', cls: 'ru-muted' },
        { t: 'wait', ms: 700 },
        { t: 'say', eo: 'Vi venis.', ru: 'Ты пришла.', speed: 45 },
        { t: 'wait', ms: 500 },
        { t: 'say', eo: 'Kompreneble.', ru: 'Разумеется.', speed: 50 },
        { t: 'wait', ms: 700 },
        { t: 'saySweet', text: 'Он предлагает тебе чай. У него нет сахара. Только чайные пакетики.' },
        { t: 'wait', ms: 600 },
        { t: 'say', eo: 'Mi devas foriri, Anna.', ru: 'Я должен уехать, Анна.', speed: 35 },
        { t: 'wait', ms: 500 },
        { t: 'say', eo: 'Ne pro la mono. Pro la vivo.', ru: 'Не из-за денег. Из-за жизни.', speed: 30 },
        { t: 'wait', ms: 700 },
        { t: 'line', text: 'Ты не спрашиваешь, почему. Ты знаешь.', cls: 'ru-muted' },
        { t: 'wait', ms: 800 },

        { t: 'saySweet', text: 'Он смотрит в окно. Долго.' },
        { t: 'wait', ms: 600 },
        { t: 'say', eo: 'Darina restos kun vi, ĉu?', ru: 'Дарина останется с тобой, да?', speed: 35 },
        { t: 'wait', ms: 600 },
        { t: 'say', eo: 'Ŝi... ŝi havas tiun rideton.', ru: 'У неё... у неё эта улыбка.', speed: 35 },
        { t: 'wait', ms: 500 },
        { t: 'say', eo: 'Ĝi savas. Vi vidos.', ru: 'Она спасает. Ты увидишь.', speed: 40 },
        { t: 'wait', ms: 800 },
        { t: 'smile', text: 'Ты вспоминаешь эту улыбку. Широкую. Красивую. И тебе становится теплее — на секунду.' },
        { t: 'wait', ms: 800 },

        { t: 'say', eo: 'Mi revenos.', ru: 'Я вернусь.', speed: 45 },
        { t: 'wait', ms: 600 },
        { t: 'say', eo: 'Post unu jaro. Eble du.', ru: 'Через год. Может, через два.', speed: 40 },
        { t: 'wait', ms: 800 },
        { t: 'line', text: 'Ты киваешь. Но внутри ты уже знаешь.', cls: 'ru-muted' },
        { t: 'wait', ms: 700 },
        { t: 'saySweet', text: 'Люди не возвращаются. Это не их вина — так устроено.' },
        { t: 'wait', ms: 1000 },
        { t: 'memory', label: 'La promeso' },
        { t: 'wait', ms: 900 }
      ]
    },

    /* =====================================================
       СЦЕНА 12: ПРОЩАНИЕ С МАКСИМОМ
       ===================================================== */
    {
      id: 'goodbye_maxim',
      steps: [
        { t: 'line', text: '' },
        { t: 'track', name: 'grief', fade: 3 },
        { t: 'line', text: '── LA STACIO · Вокзал ──', cls: 'sys' },
        { t: 'wait', ms: 1000 },
        { t: 'saySweet', text: 'Платформа. Раннее утро. Поезд в шесть сорок.' },
        { t: 'wait', ms: 700 },
        { t: 'saySweet', text: 'Дарина пришла первой. С маленьким пакетом.' },
        { t: 'wait', ms: 600 },
        { t: 'line', text: 'Внутри — кофе в термосе. Ещё горячий.', cls: 'ru-muted' },
        { t: 'wait', ms: 500 },
        { t: 'say', eo: 'Por la vojo.', ru: 'На дорогу.', speed: 50 },
        { t: 'wait', ms: 500 },
        { t: 'say', eo: 'Dankon.', ru: 'Спасибо.', speed: 50 },
        { t: 'wait', ms: 700 },
        { t: 'line', text: 'Они не обнимаются. Они не плачут.', cls: 'ru-muted' },
        { t: 'wait', ms: 500 },
        { t: 'line', text: 'Они просто стоят рядом и молчат.', cls: 'ru-muted' },
        { t: 'wait', ms: 800 },

        { t: 'saySweet', text: 'Ты смотришь на них. Что-то тёплое и в то же время — безнадёжное.' },
        { t: 'wait', ms: 600 },
        { t: 'smile', text: 'Дарина всё-таки улыбается. Через силу. Но — улыбается. Широко. Как всегда.' },
        { t: 'wait', ms: 700 },
        { t: 'line', text: 'Максим кивает. Один раз. Медленно.', cls: 'ru-muted' },
        { t: 'wait', ms: 700 },

        { t: 'line', text: 'Ты подходишь.', cls: 'ru-muted' },
        { t: 'wait', ms: 500 },
        { t: 'say', eo: 'Anna.', ru: 'Анна.', speed: 60 },
        { t: 'wait', ms: 400 },
        { t: 'say', eo: 'Vi lernis multe. Vi instruos plu.', ru: 'Ты многому научилась. Ты будешь учить дальше.', speed: 30 },
        { t: 'wait', ms: 700 },
        { t: 'say', eo: 'Ĉu vi promesas?', ru: 'Обещаешь?', speed: 40 },
        { t: 'wait', ms: 500 },
        { t: 'line', text: 'Ты хочешь сказать «нет». Ты хочешь сказать, что без него не сможешь.', cls: 'ru-muted' },
        { t: 'wait', ms: 600 },
        { t: 'line', text: 'Ты говоришь:', cls: 'ru-muted' },
        { t: 'wait', ms: 400 },
        { t: 'say', eo: 'Mi promesas.', ru: 'Обещаю.', speed: 45 },
        { t: 'wait', ms: 900 },

        { t: 'saySweet', text: 'Поезд подходит. Он берёт чемодан. Заходит.' },
        { t: 'wait', ms: 700 },
        { t: 'saySweet', text: 'Через минуту ты видишь его в окне. Он машет.' },
        { t: 'wait', ms: 600 },
        { t: 'saySweet', text: 'Ты машешь в ответ.' },
        { t: 'wait', ms: 700 },
        { t: 'saySweet', text: 'Поезд уходит.' },
        { t: 'wait', ms: 1200 },

        { t: 'line', text: 'Дарина смотрит вслед. Долго. Не двигается.', cls: 'ru-muted' },
        { t: 'wait', ms: 800 },
        { t: 'line', text: 'Даже улыбки нет. Только глаза.', cls: 'ru-muted' },
        { t: 'wait', ms: 700 },
        { t: 'say', eo: 'Ni iru.', ru: 'Пойдём.', speed: 55 },
        { t: 'wait', ms: 600 },
        { t: 'line', text: 'Вы идёте домой. Молча. Не держась за руки.', cls: 'ru-muted' },
        { t: 'wait', ms: 1100 },
        { t: 'memory', label: 'La lasta adiaŭo' },
        { t: 'wait', ms: 900 }
      ]
    },

    /* =====================================================
       СЦЕНА 13: ДАРИНА УХОДИТ
       ===================================================== */
    {
      id: 'darina_leaves',
      steps: [
        { t: 'line', text: '' },
        { t: 'track', name: 'sad', fade: 3 },
        { t: 'line', text: '── NOVEMBRO · Ноябрь ──', cls: 'sys' },
        { t: 'wait', ms: 1000 },
        { t: 'saySweet', text: 'Дарина держалась три месяца. Дольше, чем ты думала.' },
        { t: 'wait', ms: 700 },
        { t: 'saySweet', text: 'Потом ей предложили работу в городской библиотеке. С жильём.' },
        { t: 'wait', ms: 600 },
        { t: 'line', text: 'Она согласилась. Ты не винишь её.', cls: 'ru-muted' },
        { t: 'wait', ms: 800 },
        { t: 'line', text: 'Вы стоите у её подъезда. У неё в руках только одна сумка.', cls: 'ru-muted' },
        { t: 'wait', ms: 600 },
        { t: 'line', text: 'Остальное уже отправлено.', cls: 'ru-muted' },
        { t: 'wait', ms: 700 },
        { t: 'say', eo: 'Anna.', ru: 'Анна.', speed: 55 },
        { t: 'wait', ms: 400 },
        { t: 'say', eo: 'Venu kun mi.', ru: 'Поедем со мной.', speed: 40 },
        { t: 'wait', ms: 600 },
        { t: 'line', text: 'Ты качаешь головой.', cls: 'ru-muted' },
        { t: 'wait', ms: 500 },
        { t: 'say', eo: 'Kial?', ru: 'Почему?', speed: 50 },
        { t: 'wait', ms: 500 },
        { t: 'say', eo: 'Ĉi tie estas mia hejmo.', ru: 'Здесь мой дом.', speed: 40 },
        { t: 'wait', ms: 600 },
        { t: 'line', text: 'Она долго молчит. Потом говорит:', cls: 'ru-muted' },
        { t: 'wait', ms: 400 },
        { t: 'say', eo: 'Ĝi jam ne estas klubo.', ru: 'Это уже не клуб.', speed: 35 },
        { t: 'wait', ms: 700 },
        { t: 'say', eo: 'Ĝi estas nur konstruaĵo.', ru: 'Это просто здание.', speed: 30 },
        { t: 'wait', ms: 900 },
        { t: 'line', text: 'Ты не отвечаешь.', cls: 'ru-muted' },
        { t: 'wait', ms: 800 },

        { t: 'saySweet', text: 'Она достаёт что-то из сумки. Маленький блокнот.' },
        { t: 'wait', ms: 600 },
        { t: 'line', text: 'Тот самый — который подарила тебе три года назад.', cls: 'ru-muted' },
        { t: 'wait', ms: 500 },
        { t: 'say', eo: 'Konservu ĝin.', ru: 'Сохрани его.', speed: 45 },
        { t: 'wait', ms: 600 },
        { t: 'say', eo: 'Kaj la korojn.', ru: 'И сердца.', speed: 45 },
        { t: 'wait', ms: 700 },
        { t: 'line', text: 'Ты сжимаешь блокнот в руках.', cls: 'ru-muted' },
        { t: 'wait', ms: 600 },

        { t: 'saySweet', text: 'Дарина смотрит на тебя. И вдруг — улыбается.' },
        { t: 'wait', ms: 500 },
        { t: 'smile', text: 'Эта улыбка. Широкая. Красивая. Та самая, что ты запомнишь на всю жизнь.' },
        { t: 'wait', ms: 800 },
        { t: 'say', eo: 'Vulpeto kaj abeleto — ĉiam kune.', ru: 'Лисёнок и пчёлка — всегда вместе.', speed: 30 },
        { t: 'wait', ms: 700 },
        { t: 'say', eo: 'Eĉ kiam ni foriras.', ru: 'Даже когда мы уходим.', speed: 35 },
        { t: 'wait', ms: 900 },

        { t: 'say', eo: 'Ĝis revido, Anna.', ru: 'До свидания, Анна.', speed: 35 },
        { t: 'wait', ms: 500 },
        { t: 'say', eo: 'Ĝis revido, Darina.', ru: 'До свидания, Дарина.', speed: 35 },
        { t: 'wait', ms: 1000 },

        { t: 'saySweet', text: 'Она уходит. Не оборачивается.' },
        { t: 'wait', ms: 800 },
        { t: 'saySweet', text: 'Ты знаешь: она права. Но ты не можешь так.' },
        { t: 'wait', ms: 1100 },
        { t: 'memory', label: 'Ĝis revido' },
        { t: 'wait', ms: 900 }
      ]
    },

    /* =====================================================
       СЦЕНА 14: УРОК 12 — УСЛОВНОЕ НАКЛОНЕНИЕ
       ===================================================== */
    {
      id: 'lesson12',
      steps: [
        { t: 'line', text: '' },
        { t: 'track', name: 'melody_dark', fade: 3 },
        { t: 'line', text: '── VINTRO · Зима 2013 ──', cls: 'sys' },
        { t: 'wait', ms: 1000 },
        { t: 'saySweet', text: 'Ты осталась. В той же комнате, где раньше был клуб.' },
        { t: 'wait', ms: 700 },
        { t: 'line', text: 'Ты читаешь вслух сама себе по вечерам. Это помогает.', cls: 'ru-muted' },
        { t: 'wait', ms: 700 },
        { t: 'line', text: 'И ты вспоминаешь уроки Максима. Урок про «бы».', cls: 'ru-muted' },
        { t: 'wait', ms: 800 },

        { t: 'lesson', title: 'LECIONO 12 · Kondiĉa modo', subtitle: 'Условное наклонение (-us)' },

        { t: 'rule',
          text: 'Условное наклонение — окончание -us. «Бы», «если бы».',
          ru: 'mi farus — я бы сделал. se mi havus — если бы у меня было.'
        },
        { t: 'wait', ms: 500 },

        { t: 'examples', items: [
          { eo: 'mi farus', ru: 'я сделал бы' },
          { eo: 'vi venus', ru: 'ты пришёл бы' },
          { eo: 'li povus', ru: 'он мог бы' },
          { eo: 'ni restus', ru: 'мы остались бы' },
          { eo: 'se mi havus tempon', ru: 'если бы у меня было время' }
        ] },

        { t: 'rule',
          text: 'В нереальном условии ВСЁ стоит в -us. Обе части.',
          ru: 'Se mi havus tempon, mi legus. — Если бы у меня было время, я читал бы.'
        },
        { t: 'wait', ms: 500 },

        { t: 'exercise',
          kind: 'translate',
          q: 'Как сказать «Я хотел бы»?',
          hint: 'voli → volus. mi + volus.',
          answers: ['mi volus'],
          onCorrect: 'Ĝuste.',
          onWrong: 'Ne tute. Mi volus.',
          answer: 'Mi volus.',
          answerRu: 'Я хотел бы.',
          word: 'volus', translation: 'хотел бы'
        },

        { t: 'exercise',
          kind: 'translate',
          q: 'Как сказать «Если бы он пришёл»?',
          hint: 'se + li + venus.',
          answers: ['se li venus'],
          onCorrect: 'Ĝuste.',
          onWrong: 'Ne tute. Se li venus.',
          answer: 'Se li venus.',
          answerRu: 'Если бы он пришёл.',
          word: 'venus', translation: 'пришёл бы'
        },

        { t: 'exercise',
          kind: 'choose',
          q: 'Что значит «Se mi havus monon, mi vojaĝus»?',
          opts: [
            { label: 'Если у меня есть деньги, я путешествую', correct: false },
            { label: 'Если бы у меня были деньги, я путешествовал бы', correct: true },
            { label: 'Если у меня будут деньги, я поеду', correct: false }
          ],
          onCorrect: 'Ĝuste. Это нереальное условие.',
          onWrong: 'Ne tute. Обе части в -us — значит, это «если бы».'
        },

        { t: 'wait', ms: 600 },
        { t: 'saySweet', text: 'Ты закрываешь тетрадь. Смотришь в окно.' },
        { t: 'wait', ms: 700 },
        { t: 'line', text: '«Se ili estus ĉi tie...» — говоришь ты вслух. Сама себе.', cls: 'ru-muted' },
        { t: 'wait', ms: 900 },
        { t: 'line', text: '«Если бы они были здесь...»', cls: 'ru-muted' },
        { t: 'wait', ms: 1100 },
        { t: 'saySweet', text: 'Но они не здесь. И ты это знаешь.' },
        { t: 'wait', ms: 1200 },
        { t: 'lessonDone', id: 'lesson12' },
        { t: 'wait', ms: 1000 }
      ]
    },

    /* =====================================================
       СЦЕНА 15: ОДИНОЧЕСТВО
       ===================================================== */
    {
      id: 'alone',
      steps: [
        { t: 'line', text: '' },
        { t: 'line', text: '' },
        { t: 'track', name: 'silence', fade: 2 },
        { t: 'line', text: 'Комната теперь пустая. Только кровать, стол, тетради.', cls: 'ru-muted' },
        { t: 'wait', ms: 600 },
        { t: 'line', text: 'Ты больше не ведёшь уроки. Некому.', cls: 'ru-muted' },
        { t: 'wait', ms: 800 },
        { t: 'saySweet', text: 'Каждое утро ты варишь кофе. Две чашки.' },
        { t: 'wait', ms: 600 },
        { t: 'saySweet', text: 'Одну — себе. Одну — ставишь напротив. Как Дарина.' },
        { t: 'wait', ms: 700 },
        { t: 'saySweet', text: 'Ты знаешь, что это глупо. Но не перестаёшь.' },
        { t: 'wait', ms: 1000 },
        { t: 'line', text: '' },

        { t: 'track', name: 'night', fade: 3 },
        { t: 'saySweet', text: 'Однажды ночью — что-то меняется.' },
        { t: 'wait', ms: 700 },
        { t: 'line', text: 'Ты слышишь шаги. На втором этаже.' },
        { t: 'wait', ms: 400 },
        { t: 'line', text: 'Ты живёшь на первом. И никого не пускала.' },
        { t: 'wait', ms: 600 },
        { t: 'shake' },
        { t: 'line', text: 'Ты идёшь наверх. С фонариком.', cls: 'ru-muted' },
        { t: 'wait', ms: 800 },
        { t: 'line', text: 'Пусто. Только старый шкаф и кресло.', cls: 'ru-muted' },
        { t: 'wait', ms: 500 },
        { t: 'line', text: 'Ты возвращаешься вниз.', cls: 'ru-muted' },
        { t: 'wait', ms: 700 },
        { t: 'saySweet', text: 'На следующий день — то же самое. И на следующий.' },
        { t: 'wait', ms: 800 },
        { t: 'line', text: 'Ты перестаёшь обращать внимание. Это — тоже форма отчаяния.', cls: 'ru-muted' },
        { t: 'wait', ms: 1200 }
      ]
    },

    /* =====================================================
       СЦЕНА 16: ПОЯВЛЕНИЕ «ЕГО»
       ===================================================== */
    {
      id: 'the_voice',
      steps: [
        { t: 'line', text: '' },
        { t: 'track', name: 'horror', fade: 3 },
        { t: 'line', text: '── JANUARO · Январь 2014 ──', cls: 'sys' },
        { t: 'wait', ms: 1200 },
        { t: 'saySweet', text: 'Ты читаешь вслух. Как обычно. Одна.' },
        { t: 'wait', ms: 600 },
        { t: 'line', text: 'Ты произносишь слово «lumo» — «свет».', cls: 'ru-muted' },
        { t: 'wait', ms: 500 },
        { t: 'word', word: 'lumo', translation: 'свет' },
        { t: 'wait', ms: 900 },
        { t: 'glitch' },
        { t: 'wait', ms: 500 },
        { t: 'line', text: 'Свет в комнате мигает. Один раз. Коротко.', cls: 'ru-muted' },
        { t: 'wait', ms: 800 },
        { t: 'line', text: 'Ты поднимаешь глаза.', cls: 'ru-muted' },
        { t: 'wait', ms: 900 },
        { t: 'saySweet', text: 'В углу — кто-то есть.' },
        { t: 'wait', ms: 800 },
        { t: 'line', text: 'Ты не видишь его. Но чувствуешь, что он смотрит.' },
        { t: 'wait', ms: 700 },
        { t: 'shake' },
        { t: 'line', text: 'Голос. Мужской. Спокойный. Незнакомый.', cls: 'ru-muted' },
        { t: 'wait', ms: 900 },
        { t: 'line', text: '«Ты не должна читать одна», — говорит он.', cls: 'bad' },
        { t: 'wait', ms: 1000 },
        { t: 'line', text: 'Ты замираешь. Сердце — колотится.' },
        { t: 'wait', ms: 700 },
        { t: 'line', text: 'Ты хочешь спросить «Кто здесь?», но голос не выходит.' },
        { t: 'wait', ms: 800 },
        { t: 'line', text: 'Он говорит снова:', cls: 'ru-muted' },
        { t: 'wait', ms: 500 },
        { t: 'line', text: '«Я знаю, как тебе одиноко».', cls: 'bad' },
        { t: 'wait', ms: 900 },
        { t: 'line', text: '«Я знаю, как трудно продолжать в одиночку».', cls: 'bad' },
        { t: 'wait', ms: 1000 },
        { t: 'line', text: '«Я могу тебе помочь».', cls: 'bad' },
        { t: 'wait', ms: 1200 },
        { t: 'line', text: '', cls: '' },
        { t: 'saySweet', text: 'Ты ничего не отвечаешь. Ты просто сидишь.' },
        { t: 'wait', ms: 800 },
        { t: 'line', text: 'Через минуту — тишина. Он ушёл. Если он вообще был.' },
        { t: 'wait', ms: 1000 },
        { t: 'memory', label: 'La voĉo' },
        { t: 'wait', ms: 900 }
      ]
    },

    /* =====================================================
       СЦЕНА 17: СОГЛАСИЕ
       ===================================================== */
    {
      id: 'agreement',
      steps: [
        { t: 'line', text: '' },
        { t: 'track', name: 'dread', fade: 3 },
        { t: 'line', text: '── FEBRUARO · Февраль 2014 ──', cls: 'sys' },
        { t: 'wait', ms: 1200 },
        { t: 'saySweet', text: 'Он приходил каждую ночь. Сначала — молча.' },
        { t: 'wait', ms: 700 },
        { t: 'saySweet', text: 'Потом — стал говорить. Про тебя. Про Максима. Про Дарину.' },
        { t: 'wait', ms: 600 },
        { t: 'line', text: 'Ты слушала. Сначала — потому что было страшно.', cls: 'ru-muted' },
        { t: 'wait', ms: 500 },
        { t: 'line', text: 'Потом — потому что было уже не так одиноко.', cls: 'ru-muted' },
        { t: 'wait', ms: 900 },
        { t: 'line', text: '', cls: '' },
        { t: 'saySweet', text: 'Однажды вечером ты садишься в кресло. Напротив пустого угла.' },
        { t: 'wait', ms: 700 },
        { t: 'line', text: '«Ты здесь?», — спрашиваешь ты.' },
        { t: 'wait', ms: 800 },
        { t: 'line', text: '«Я всегда здесь», — отвечает он.' },
        { t: 'wait', ms: 900 },
        { t: 'saySweet', text: 'Ты долго молчишь. Потом говоришь то, что не говорила никому.' },
        { t: 'wait', ms: 700 },
        { t: 'line', text: '«Я устала быть одна».', cls: 'ru-muted' },
        { t: 'wait', ms: 900 },
        { t: 'line', text: '«Я знаю».', cls: 'bad' },
        { t: 'wait', ms: 800 },
        { t: 'line', text: '«Максим обещал вернуться».', cls: 'ru-muted' },
        { t: 'wait', ms: 700 },
        { t: 'line', text: '«Он не вернётся».', cls: 'bad' },
        { t: 'wait', ms: 900 },
        { t: 'line', text: '«Дарина писала мне».', cls: 'ru-muted' },
        { t: 'wait', ms: 600 },
        { t: 'line', text: '«Она тоже не вернётся».', cls: 'bad' },
        { t: 'wait', ms: 1000 },
        { t: 'saySweet', text: 'Ты закрываешь глаза. Слёзы — беззвучные. Как тогда, у Дарины.' },
        { t: 'wait', ms: 900 },
        { t: 'line', text: '«Что мне делать?»', cls: 'ru-muted' },
        { t: 'wait', ms: 900 },
        { t: 'line', text: '«Продолжай учить. Я помогу».', cls: 'bad' },
        { t: 'wait', ms: 800 },
        { t: 'line', text: '«Кого? Здесь никого нет».', cls: 'ru-muted' },
        { t: 'wait', ms: 900 },
        { t: 'line', text: '«Будут», — говорит он. — «Придут новые. Ты только открой дверь».', cls: 'bad' },
        { t: 'wait', ms: 1200 },
        { t: 'line', text: '', cls: '' },
        { t: 'line', text: 'Ты открываешь глаза.', cls: 'ru-muted' },
        { t: 'wait', ms: 700 },
        { t: 'line', text: 'В комнате — тишина. Никого.' },
        { t: 'wait', ms: 800 },
        { t: 'line', text: 'Только на столе лежит лист бумаги. На нём — одно слово, написанное от руки.' },
        { t: 'wait', ms: 900 },
        { t: 'flash', strength: 0.6, color: 'white' },
        { t: 'hardShake', ms: 700 },
        { t: 'line', text: 'DAŬRIGU', cls: 'bad' },
        { t: 'wait', ms: 1300 },
        { t: 'line', text: '«Продолжай».', cls: 'ru-muted' },
        { t: 'wait', ms: 1400 },
        { t: 'line', text: '', cls: '' },
        { t: 'track', name: 'void', fade: 4 },
        { t: 'line', text: 'Ты долго смотришь на этот лист.', cls: 'ru-muted' },
        { t: 'wait', ms: 800 },
        { t: 'line', text: 'Потом берёшь ручку.', cls: 'ru-muted' },
        { t: 'wait', ms: 700 },
        { t: 'line', text: 'И пишешь под ним одно слово.', cls: 'ru-muted' },
        { t: 'wait', ms: 1000 },
        { t: 'line', text: 'BONE.', cls: 'bad' },
        { t: 'wait', ms: 1200 },
        { t: 'line', text: '«Хорошо».', cls: 'ru-muted' },
        { t: 'wait', ms: 1300 },
        { t: 'line', text: '', cls: '' },
        { t: 'saySweet', text: 'Так началась твоя вечность.' },
        { t: 'wait', ms: 1400 },
        { t: 'line', text: '── Fino de Akto II ──', cls: 'sys' },
        { t: 'wait', ms: 1500 }
      ]
    }
  ]
};