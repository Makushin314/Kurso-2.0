/* =========================================================
   AKTO I — Antaŭ la Fermo · До закрытия (2010)
   Версия 11.4 — с 7 встроенными уроками эсперанто,
   сценой имени клуба и улыбкой Дарины
   ========================================================= */
window.STORY = window.STORY || {};
window.STORY.act1 = {
  title: 'Акт I — Antaŭ la Fermo',
  scenes: [

    /* =====================================================
       СЦЕНА 1: ПРОЛОГ
       ===================================================== */
    {
      id: 'intro',
      steps: [
        { t: 'track', name: 'silence' },
        { t: 'line', text: 'KURSO — Akto I', cls: 'sys' },
        { t: 'line', text: 'Antaŭ la Fermo · До закрытия', cls: 'sys' },
        { t: 'line', text: 'Jaro 2010. Klubo «Vulpeto Abeleto».', cls: 'sys' },
        { t: 'wait', ms: 900 },
        { t: 'track', name: 'peaceful', fade: 3 },
        { t: 'line', text: '' },
        { t: 'saySweet', text: 'Ты стоишь у двери. Деревянная. С облупившейся краской.' },
        { t: 'wait', ms: 700 },
        { t: 'saySweet', text: 'Внутри слышны голоса. Смех. Чей-то глубокий, спокойный голос читает вслух.' },
        { t: 'wait', ms: 700 },
        { t: 'saySweet', text: 'Тебе семнадцать. Ты пришла одна.' },
        { t: 'wait', ms: 900 },
        { t: 'saySweet', text: 'Ты открываешь дверь.' },
        { t: 'fx', name: 'warm', dur: 3000 },
        { t: 'wait', ms: 1200 },
        { t: 'clearFx' },
        { t: 'line', text: '' },
        { t: 'line', text: 'Комната — большая, но уютная.', cls: 'ru' },
        { t: 'line', text: 'Полки с книгами. Портреты каких-то людей. На стене — зелёная звезда.', cls: 'ru-muted' },
        { t: 'line', text: 'За столом сидит человек лет сорока. Очки. Борода.', cls: 'ru' },
        { t: 'wait', ms: 700 },
        { t: 'line', text: 'Он поднимает глаза и улыбается.', cls: 'ru-muted' },
        { t: 'wait', ms: 600 },
        { t: 'say', eo: 'Saluton.', ru: 'Привет.', speed: 50 },
        { t: 'wait', ms: 500 },
        { t: 'say', eo: 'Vi estas nova, ĉu ne?', ru: 'Ты новенькая, да?', speed: 40 },
        { t: 'wait', ms: 500 },
        { t: 'line', text: 'Ты киваешь.', cls: 'ru-muted' },
        { t: 'say', eo: 'Mi estas Maksim.', ru: 'Я — Максим.', speed: 45 },
        { t: 'wait', ms: 500 },
        { t: 'say', eo: 'Bonvenon al nia klubo — Vulpeto Abeleto.', ru: 'Добро пожаловать в наш клуб — Вульпето Абелето.', speed: 40 },
        { t: 'wait', ms: 800 },

        { t: 'line', text: '' },
        { t: 'saySweet', text: 'Ты хочешь спросить, что это значит. Странное имя.' },
        { t: 'wait', ms: 600 },
        { t: 'saySweet', text: 'Но из угла комнаты — шорох.' },
        { t: 'wait', ms: 500 },
        { t: 'saySweet', text: 'Женщина в фартуке поливает цветы у окна.' },
        { t: 'wait', ms: 700 },
        { t: 'saySweet', text: 'Она оборачивается.' },
        { t: 'wait', ms: 500 },
        { t: 'smile', text: 'У неё — невероятно широкая и красивая улыбка. Такая, что становится тепло даже в полумраке.' },
        { t: 'wait', ms: 800 },
        { t: 'saySweet', text: 'Она улыбается — тепло, как мама.' },
        { t: 'wait', ms: 500 },
        { t: 'say', eo: 'Darina.', ru: 'Дарина.', speed: 50 },
        { t: 'wait', ms: 400 },
        { t: 'say', eo: 'Ne timu. Li nur ŝajnas severa.', ru: 'Не бойся. Он только кажется строгим.', speed: 40 },
        { t: 'wait', ms: 800 },
        { t: 'line', text: 'Ты говоришь, что тебя зовут Анна.', cls: 'ru-muted' },
        { t: 'wait', ms: 500 },
        { t: 'say', eo: 'Anna.', ru: 'Анна.', speed: 60 },
        { t: 'wait', ms: 500 },
        { t: 'say', eo: 'Bela nomo.', ru: 'Красивое имя.', speed: 45 },
        { t: 'wait', ms: 800 },
        { t: 'line', text: '— садись. Мы как раз начинаем урок.', cls: 'ru-muted' },
        { t: 'wait', ms: 800 },
        { t: 'memory', label: 'Darina kaj Maksim' },
        { t: 'word', word: 'vulpeto', translation: 'лисёнок' },
        { t: 'word', word: 'abeleto', translation: 'пчёлка' },
        { t: 'wait', ms: 700 }
      ]
    },

    /* =====================================================
       СЦЕНА 2: УРОК 1 — ПРИВЕТСТВИЯ
       ===================================================== */
    {
      id: 'lesson1',
      steps: [
        { t: 'lesson', title: 'LECIONO 1 · Salutoj', subtitle: 'Приветствия и вежливые слова' },

        { t: 'saySweet', text: 'Максим открывает тетрадь. Она вся исписана.' },
        { t: 'wait', ms: 600 },
        { t: 'say', eo: 'Komencu per la plej simplaj vortoj.', ru: 'Начнём с самых простых слов.', speed: 35 },
        { t: 'wait', ms: 500 },

        { t: 'rule',
          text: 'В эсперанто ударение ВСЕГДА на предпоследний слог.',
          ru: 'Как написано — так и читается. Без исключений.'
        },
        { t: 'wait', ms: 600 },

        { t: 'examples', items: [
          { eo: 'Saluton.', ru: 'Привет.' },
          { eo: 'Bonan matenon.', ru: 'Доброе утро.' },
          { eo: 'Bonan tagon.', ru: 'Добрый день.' },
          { eo: 'Bonan vesperon.', ru: 'Добрый вечер.' },
          { eo: 'Dankon.', ru: 'Спасибо.' },
          { eo: 'Ĝis revido.', ru: 'До свидания.' }
        ] },

        { t: 'saySweet', text: 'Ты повторяешь за ним. Тихо.' },
        { t: 'wait', ms: 700 },

        { t: 'exercise',
          kind: 'translate',
          q: 'Как сказать по-эсперанто «Привет»?',
          hint: 'Подсказка: 7 букв, начинается с s. Ударение на предпоследний слог.',
          answers: ['saluton'],
          onCorrect: 'Ĝuste. Saluton.',
          onWrong: 'Malĝuste.',
          answer: 'Saluton.',
          answerRu: 'Привет.',
          word: 'saluton', translation: 'привет'
        },

        { t: 'exercise',
          kind: 'choose',
          q: 'Что значит «Dankon»?',
          opts: [
            { label: 'Привет', correct: false },
            { label: 'Спасибо', correct: true },
            { label: 'До свидания', correct: false }
          ],
          onCorrect: 'Ĝuste. Dankon — спасибо.',
          onWrong: 'Ne tute.',
          word: 'dankon', translation: 'спасибо'
        },

        { t: 'exercise',
          kind: 'choose',
          q: 'Что значит «Ĝis revido»?',
          opts: [
            { label: 'До свидания', correct: true },
            { label: 'Привет', correct: false },
            { label: 'Спасибо', correct: false }
          ],
          onCorrect: 'Ĝuste.',
          onWrong: 'Ne tute.',
          word: 'ĝis revido', translation: 'до свидания'
        },

        { t: 'wait', ms: 600 },
        { t: 'saySweet', text: 'Дарина подходит и ставит перед тобой чашку.' },
        { t: 'wait', ms: 500 },
        { t: 'smile', text: 'У неё снова эта широкая, тёплая улыбка. Ты невольно улыбаешься в ответ.' },
        { t: 'wait', ms: 500 },
        { t: 'say', eo: 'Kafo.', ru: 'Кофе.', speed: 55 },
        { t: 'wait', ms: 400 },
        { t: 'say', eo: 'Por vi.', ru: 'Для тебя.', speed: 45 },
        { t: 'word', word: 'kafo', translation: 'кофе' },
        { t: 'wait', ms: 600 },
        { t: 'say', eo: 'Dankon.', ru: 'Спасибо.', speed: 55 },
        { t: 'wait', ms: 800 },
        { t: 'saySweet', text: 'Она уходит обратно к цветам — тихо, мягко, как будто не касается пола.' },
        { t: 'lessonDone', id: 'lesson1' },
        { t: 'wait', ms: 900 }
      ]
    },

    /* =====================================================
       СЦЕНА 3: УРОК 2 — МЕСТОИМЕНИЯ
       ===================================================== */
    {
      id: 'lesson2',
      steps: [
        { t: 'wait', ms: 400 },
        { t: 'saySweet', text: 'Прошло полчаса. Ты уже почти не смущаешься.' },
        { t: 'wait', ms: 600 },
        { t: 'say', eo: 'Nun — la pronomoj.', ru: 'Теперь — местоимения.', speed: 40 },
        { t: 'wait', ms: 500 },

        { t: 'lesson', title: 'LECIONO 2 · Pronomoj', subtitle: 'Личные местоимения' },

        { t: 'rule',
          text: 'В эсперанто нет разницы между «ты» и «Вы».',
          ru: '«Vi» — и для одного, и для многих.'
        },
        { t: 'wait', ms: 500 },

        { t: 'examples', items: [
          { eo: 'mi', ru: 'я' },
          { eo: 'vi', ru: 'ты / вы' },
          { eo: 'li', ru: 'он' },
          { eo: 'ŝi', ru: 'она' },
          { eo: 'ĝi', ru: 'оно' },
          { eo: 'ni', ru: 'мы' },
          { eo: 'ili', ru: 'они' },
          { eo: 'oni', ru: 'некто / безлично' }
        ] },

        { t: 'rule',
          text: 'Ŝi — «она» о человеке. Ĝi — «оно» о предмете или животном.',
          ru: 'Запомни разницу: ŝi = о живом человеке, ĝi = о вещи или явлении.'
        },
        { t: 'wait', ms: 500 },

        { t: 'exercise',
          kind: 'translate',
          q: 'Как сказать «мы»?',
          hint: 'Две буквы. Первая — n.',
          answers: ['ni'],
          onCorrect: 'Ĝuste. Ni.',
          onWrong: 'Malĝuste.',
          answer: 'Ni.',
          answerRu: 'Мы.',
          word: 'ni', translation: 'мы'
        },

        { t: 'exercise',
          kind: 'translate',
          q: 'Как сказать «она» (о человеке)?',
          hint: 'Буква ŝ с «шапочкой». Можно ввести как sx i.',
          answers: ['ŝi', 'shi', 'si'],
          onCorrect: 'Ĝuste. Ŝi.',
          onWrong: 'Ne tute.',
          answer: 'Ŝi.',
          answerRu: 'Она.',
          word: 'ŝi', translation: 'она'
        },

        { t: 'exercise',
          kind: 'choose',
          q: 'Какое местоимение значит «они»?',
          opts: [
            { label: 'ni', correct: false },
            { label: 'ili', correct: true },
            { label: 'ĝi', correct: false }
          ],
          onCorrect: 'Ĝuste.',
          onWrong: 'Ne tute. Правильно — ili.',
          word: 'ili', translation: 'они'
        },

        { t: 'saySweet', text: 'Максим доволен. Он говорит: «Vi lernas rapide».' },
        { t: 'wait', ms: 400 },
        { t: 'say', eo: 'Vi lernas rapide.', ru: 'Ты учишься быстро.', speed: 40 },
        { t: 'wait', ms: 500 },
        { t: 'lessonDone', id: 'lesson2' },
        { t: 'wait', ms: 900 }
      ]
    },

    /* =====================================================
       СЦЕНА 4: ИМЯ КЛУБА
       ===================================================== */
    {
      id: 'club_name',
      steps: [
        { t: 'line', text: '' },
        { t: 'track', name: 'warm', fade: 2.5 },
        { t: 'saySweet', text: 'Дарина присаживается рядом. Приносит ещё чашку — для Максима.' },
        { t: 'wait', ms: 700 },

        { t: 'saySweet', text: 'Ты набираешься смелости и спрашиваешь то, что вертелось на языке с самого входа.' },
        { t: 'wait', ms: 700 },
        { t: 'line', text: '— Почему «Vulpeto Abeleto»? Что это значит?', cls: 'ru-muted' },
        { t: 'wait', ms: 800 },

        { t: 'saySweet', text: 'Максим откидывается на спинку стула. Смотрит на Дарину.' },
        { t: 'wait', ms: 600 },
        { t: 'say', eo: 'Vulpeto — лисёнок.', ru: 'Vulpeto — лисёнок.', speed: 40 },
        { t: 'wait', ms: 400 },
        { t: 'say', eo: 'Abeleton — пчёлку. Vi scias?', ru: 'А abeleto — пчёлка. Ты знаешь?', speed: 35 },
        { t: 'wait', ms: 700 },
        { t: 'line', text: 'Ты качаешь головой.' },
        { t: 'wait', ms: 600 },

        { t: 'saySweet', text: 'Он берёт со стола лист бумаги. Что-то рисует быстрыми штрихами.' },
        { t: 'wait', ms: 600 },
        { t: 'line', text: 'Лисёнок. Хитрый. Одинокий. Сидит у норы и смотрит в темноту.', cls: 'ru-muted' },
        { t: 'wait', ms: 500 },
        { t: 'line', text: 'Пчёлка. Маленькая. Тёплая. Всё время что-то делает — собирает, носит, кормит.', cls: 'ru-muted' },
        { t: 'wait', ms: 800 },

        { t: 'clubname', text: 'VULPETO ABELETO.' },
        { t: 'wait', ms: 900 },

        { t: 'saySweet', text: 'Дарина улыбается — снова эта широкая, красивая улыбка. От неё становится теплее.' },
        { t: 'wait', ms: 600 },
        { t: 'say', eo: 'Ni longe elektis la nomon.', ru: 'Мы долго выбирали имя.', speed: 40 },
        { t: 'wait', ms: 400 },
        { t: 'say', eo: 'Mi volis «vulpeton».', ru: 'Я хотел «лисёнка».', speed: 45 },
        { t: 'wait', ms: 400 },
        { t: 'say', eo: 'Kaj mi volis «abeleton».', ru: 'А я хотела «пчёлку».', speed: 45 },
        { t: 'wait', ms: 600 },
        { t: 'say', eo: 'Do — ni prenis ambaŭ.', ru: 'Так мы взяли оба.', speed: 40 },
        { t: 'wait', ms: 800 },

        { t: 'line', text: 'Максим смотрит на Дарину. Она — на него. Молча. Но в этом молчании что-то тёплое.' },
        { t: 'wait', ms: 800 },

        { t: 'say', eo: 'Vulpeto — tio estas vi, Anna.', ru: 'Лисёнок — это ты, Анна.', speed: 35 },
        { t: 'wait', ms: 600 },
        { t: 'line', text: 'Ты вздрагиваешь. Не ожидала.' },
        { t: 'wait', ms: 500 },
        { t: 'say', eo: 'Vi venis sola. Vi estas juna. Vi serĉas.', ru: 'Ты пришла одна. Ты юная. Ты ищешь.', speed: 35 },
        { t: 'wait', ms: 500 },
        { t: 'say', eo: 'Kaj ni estos la abeletoj. Ni estos ĉirkaŭ vi.', ru: 'А мы будем пчёлками. Мы будем рядом.', speed: 35 },
        { t: 'wait', ms: 900 },

        { t: 'memory', label: 'La nomo de la klubo' },
        { t: 'word', word: 'vulpeto', translation: 'лисёнок' },
        { t: 'word', word: 'abeleto', translation: 'пчёлка' },
        { t: 'word', word: 'nomo', translation: 'имя' },
        { t: 'wait', ms: 800 },

        { t: 'saySweet', text: 'Ты опускаешь глаза. Впервые за долгое время — не от смущения, а от чего-то другого.' },
        { t: 'wait', ms: 700 },
        { t: 'line', text: 'От чувства, что тебя увидели.', cls: 'ru-muted' },
        { t: 'wait', ms: 1000 }
      ]
    },

    /* =====================================================
       СЦЕНА 5: ВЕЧЕР, ЗНАКОМСТВО
       ===================================================== */
    {
      id: 'evening',
      steps: [
        { t: 'line', text: '' },
        { t: 'track', name: 'storySweet', fade: 3 },
        { t: 'line', text: '── POSTE · Позже ──', cls: 'sys' },
        { t: 'wait', ms: 900 },
        { t: 'saySweet', text: 'Прошло три часа. Ученики разошлись.' },
        { t: 'wait', ms: 600 },
        { t: 'saySweet', text: 'Ты осталась помочь убрать книги.' },
        { t: 'wait', ms: 700 },
        { t: 'say', eo: 'Vi ne devis resti.', ru: 'Ты не должна была оставаться.', speed: 35 },
        { t: 'wait', ms: 500 },
        { t: 'say', eo: 'Sed mi ĝojas, ke vi restis.', ru: 'Но я рад, что ты осталась.', speed: 30 },
        { t: 'wait', ms: 700 },
        { t: 'line', text: 'Ты говоришь: «Мне здесь нравится».', cls: 'ru-muted' },
        { t: 'wait', ms: 500 },
        { t: 'say', eo: 'Ĝi estas nia hejmo.', ru: 'Это наш дом.', speed: 40 },
        { t: 'wait', ms: 500 },
        { t: 'say', eo: 'Kaj nun — ankaŭ via, se vi volas.', ru: 'А теперь — и твой, если хочешь.', speed: 30 },
        { t: 'wait', ms: 1000 },
        { t: 'line', text: '' },
        { t: 'saySweet', text: 'Дарина подходит. В руках у неё маленький блокнот.' },
        { t: 'wait', ms: 500 },
        { t: 'say', eo: 'Jen. Por vi.', ru: 'Вот. Для тебя.', speed: 50 },
        { t: 'wait', ms: 500 },
        { t: 'saySweet', text: 'Ты открываешь его. Чистые страницы. В углу — нарисованное сердце.' },
        { t: 'wait', ms: 700 },
        { t: 'say', eo: 'Desegnu ion. Ion gravan.', ru: 'Нарисуй что-нибудь. Что-то важное.', speed: 30 },
        { t: 'wait', ms: 900 },
        { t: 'memory', label: 'La kajero' },
        { t: 'line', text: '' },
        { t: 'line', text: 'Ты рисуешь маленькое сердце рядом с её сердцем.', cls: 'ru' },
        { t: 'wait', ms: 700 },
        { t: 'saySweet', text: 'Дарина смеётся. Мягко, тихо.' },
        { t: 'wait', ms: 500 },
        { t: 'smile', text: 'Её улыбка становится ещё шире — такой, что кажется, будто в комнате зажгли ещё одну лампу.' },
        { t: 'wait', ms: 700 },
        { t: 'line', text: '«Теперь их два», — говорит она.', cls: 'ru-muted' },
        { t: 'wait', ms: 500 },
        { t: 'saySweet', text: 'Сердца. Маленькие. Тёплые.' },
        { t: 'wait', ms: 400 },
        { t: 'line', text: 'Ты не знаешь, что однажды они станут для кого-то спасением.', cls: 'ru-muted' },
        { t: 'word', word: 'koro', translation: 'сердце' },
        { t: 'wait', ms: 700 },
        { t: 'saySweet', text: 'Максим смотрит на вас двоих. Он молчит. Улыбается.' },
        { t: 'wait', ms: 500 },
        { t: 'say', eo: 'Vi estas kiel fratinoj.', ru: 'Вы как сёстры.', speed: 35 },
        { t: 'wait', ms: 700 },
        { t: 'line', text: 'Дарина краснеет. Смеётся. Машет на него рукой.', cls: 'ru-muted' },
        { t: 'wait', ms: 900 }
      ]
    },

    /* =====================================================
       СЦЕНА 6: УРОК 3 — ГЛАГОЛ ESTI
       ===================================================== */
    {
      id: 'lesson3',
      steps: [
        { t: 'line', text: '' },
        { t: 'track', name: 'morning', fade: 2.5 },
        { t: 'line', text: '── LA SEKVAN TAGON · На следующий день ──', cls: 'sys' },
        { t: 'wait', ms: 900 },
        { t: 'saySweet', text: 'Ты пришла снова. И на следующий день. И через день.' },
        { t: 'wait', ms: 600 },
        { t: 'saySweet', text: 'Так начались твои будни.' },
        { t: 'wait', ms: 800 },
        { t: 'say', eo: 'Hodiaŭ — la plej grava verbo.', ru: 'Сегодня — самый важный глагол.', speed: 35 },
        { t: 'wait', ms: 500 },

        { t: 'lesson', title: 'LECIONO 3 · La verbo «esti»', subtitle: 'Глагол «быть»' },

        { t: 'rule',
          text: 'Окончания глагола: -as (настоящее), -is (прошедшее), -os (будущее).',
          ru: 'Изменяется только окончание — корень всегда одинаковый.'
        },
        { t: 'wait', ms: 500 },

        { t: 'examples', items: [
          { eo: 'mi estas', ru: 'я есть' },
          { eo: 'vi estas', ru: 'ты есть' },
          { eo: 'li estas', ru: 'он есть' },
          { eo: 'ŝi estas', ru: 'она есть' },
          { eo: 'ni estas', ru: 'мы есть' },
          { eo: 'ili estas', ru: 'они есть' }
        ] },

        { t: 'rule',
          text: 'В русском «есть» мы обычно опускаем, но в эсперанто «estas» нужно всегда.',
          ru: '«Я ученик» по-эсперанто — mi estas lernanto. Дословно: «я есть ученик».'
        },
        { t: 'wait', ms: 600 },

        { t: 'exercise',
          kind: 'translate',
          q: 'Напиши по-эсперанто: «Я — ученик».',
          hint: 'Порядок: mi + estas + lernanto. Не забудь про estas.',
          answers: ['mi estas lernanto'],
          onCorrect: 'Ĝuste. Mi estas lernanto.',
          onWrong: 'Ne tute.',
          answer: 'Mi estas lernanto.',
          answerRu: 'Я — ученик.',
          word: 'lernanto', translation: 'ученик'
        },

        { t: 'exercise',
          kind: 'fill',
          q: 'Заполни пропуск: «Vi ___ instruisto».',
          hint: 'Подставь нужную форму глагола «быть» в настоящем времени.',
          answers: ['estas'],
          onCorrect: 'Ĝuste.',
          onWrong: 'Ne tute.',
          answer: 'estas',
          word: 'estas', translation: 'есть (наст. время)'
        },

        { t: 'exercise',
          kind: 'choose',
          q: 'Как будет «Я был» по-эсперанто?',
          opts: [
            { label: 'mi estas', correct: false },
            { label: 'mi estis', correct: true },
            { label: 'mi estos', correct: false }
          ],
          onCorrect: 'Ĝuste. -is — прошедшее время.',
          onWrong: 'Ne tute. -is — прошедшее, -os — будущее.'
        },

        { t: 'word', word: 'instruisto', translation: 'учитель' },
        { t: 'lessonDone', id: 'lesson3' },
        { t: 'wait', ms: 900 }
      ]
    },

    /* =====================================================
       СЦЕНА 7: УРОК 4 — СУЩЕСТВИТЕЛЬНЫЕ
       ===================================================== */
    {
      id: 'lesson4',
      steps: [
        { t: 'wait', ms: 400 },
        { t: 'saySweet', text: 'Прошла неделя. Ты уже знаешь половину группы по именам.' },
        { t: 'wait', ms: 600 },
        { t: 'say', eo: 'Nun — la substantivoj.', ru: 'Теперь — существительные.', speed: 40 },
        { t: 'wait', ms: 500 },

        { t: 'lesson', title: 'LECIONO 4 · Substantivoj', subtitle: 'Существительные и множественное число' },

        { t: 'rule',
          text: 'Все существительные оканчиваются на -o.',
          ru: 'Это как маркер — сразу видно, что это предмет, а не действие.'
        },
        { t: 'wait', ms: 500 },

        { t: 'examples', items: [
          { eo: 'lernanto', ru: 'ученик' },
          { eo: 'instruisto', ru: 'учитель' },
          { eo: 'amiko', ru: 'друг' },
          { eo: 'libro', ru: 'книга' },
          { eo: 'kafo', ru: 'кофе' },
          { eo: 'koro', ru: 'сердце' }
        ] },

        { t: 'rule',
          text: 'Множественное число — окончание -j.',
          ru: 'lernanto → lernantoj (ученик → ученики).'
        },
        { t: 'wait', ms: 500 },

        { t: 'examples', items: [
          { eo: 'lernantoj', ru: 'ученики' },
          { eo: 'amikoj', ru: 'друзья' },
          { eo: 'libroj', ru: 'книги' },
          { eo: 'instruistoj', ru: 'учителя' }
        ] },

        { t: 'exercise',
          kind: 'translate',
          q: 'Как сказать «друзья» (множественное число от «amiko»)?',
          hint: 'Добавь окончание -j к слову amiko.',
          answers: ['amikoj'],
          onCorrect: 'Ĝuste.',
          onWrong: 'Ne tute.',
          answer: 'Amikoj.',
          answerRu: 'Друзья.',
          word: 'amikoj', translation: 'друзья'
        },

        { t: 'exercise',
          kind: 'translate',
          q: 'Как сказать «книга»?',
          hint: 'Корень — libr, окончание -o.',
          answers: ['libro'],
          onCorrect: 'Ĝuste.',
          onWrong: 'Ne tute.',
          answer: 'Libro.',
          answerRu: 'Книга.',
          word: 'libro', translation: 'книга'
        },

        { t: 'exercise',
          kind: 'choose',
          q: 'Как будет «учителя» (много учителей)?',
          opts: [
            { label: 'instruisto', correct: false },
            { label: 'instruistoj', correct: true },
            { label: 'instruiston', correct: false }
          ],
          onCorrect: 'Ĝuste. -j — множественное число.',
          onWrong: 'Ne tute.'
        },

        { t: 'lessonDone', id: 'lesson4' },
        { t: 'wait', ms: 900 }
      ]
    },

    /* =====================================================
       СЦЕНА 8: УРОК 5 — ВИНИТЕЛЬНЫЙ ПАДЕЖ
       ===================================================== */
    {
      id: 'lesson5',
      steps: [
        { t: 'line', text: '' },
        { t: 'track', name: 'storySweet', fade: 3 },
        { t: 'saySweet', text: 'Ты приходишь всё чаще. Дарина уже оставляет тебе чашку.' },
        { t: 'wait', ms: 600 },
        { t: 'say', eo: 'Hodiaŭ — la akuzativo.', ru: 'Сегодня — винительный падеж.', speed: 40 },
        { t: 'wait', ms: 500 },

        { t: 'lesson', title: 'LECIONO 5 · La akuzativo', subtitle: 'Винительный падеж' },

        { t: 'rule',
          text: 'Винительный падеж — окончание -n. Оно показывает, на кого направлено действие.',
          ru: 'Если что-то делается с кем-то — этому «кому-то» добавляют -n.'
        },
        { t: 'wait', ms: 500 },

        { t: 'examples', items: [
          { eo: 'Mi vidas vin.', ru: 'Я вижу тебя.' },
          { eo: 'Mi amas vin.', ru: 'Я люблю тебя.' },
          { eo: 'Mi atendas lin.', ru: 'Я жду его.' },
          { eo: 'Ni atendas ŝin.', ru: 'Мы ждём её.' }
        ] },

        { t: 'rule',
          text: 'Если предметов много — соединяем: -j + -n → -jn.',
          ru: 'lernantoj → lernantojn. «Я вижу учеников» — Mi vidas lernantojn.'
        },
        { t: 'wait', ms: 500 },

        { t: 'exercise',
          kind: 'translate',
          q: 'Как сказать «Я вижу тебя»?',
          hint: 'mi vidas + vin. Не забудь окончание -n.',
          answers: ['mi vidas vin'],
          onCorrect: 'Ĝuste.',
          onWrong: 'Ne tute. Правильно — mi vidas vin.',
          answer: 'Mi vidas vin.',
          answerRu: 'Я вижу тебя.',
          word: 'vidas', translation: 'вижу'
        },

        { t: 'exercise',
          kind: 'translate',
          q: 'Как сказать «Я вижу учеников»?',
          hint: 'mi vidas + lernantojn (не забудь -j и -n вместе).',
          answers: ['mi vidas lernantojn'],
          onCorrect: 'Ĝuste.',
          onWrong: 'Ne tute.',
          answer: 'Mi vidas lernantojn.',
          answerRu: 'Я вижу учеников.'
        },

        { t: 'exercise',
          kind: 'choose',
          q: 'Какое предложение верное: «Я люблю тебя»?',
          opts: [
            { label: 'Mi amas vi', correct: false },
            { label: 'Mi amas vin', correct: true },
            { label: 'Mi amas vim', correct: false }
          ],
          onCorrect: 'Ĝuste. Окончание -n обязательно.',
          onWrong: 'Ne tute. Правильно — mi amas vin.'
        },

        { t: 'wait', ms: 500 },
        { t: 'saySweet', text: 'Максим закрывает тетрадь. «Ni ripozu», — говорит он.' },
        { t: 'wait', ms: 500 },
        { t: 'say', eo: 'Ni ripozu.', ru: 'Отдохнём.', speed: 45 },
        { t: 'wait', ms: 400 },
        { t: 'saySweet', text: 'Дарина ставит перед вами тарелку с печеньем.' },
        { t: 'wait', ms: 400 },
        { t: 'smile', text: 'Она улыбается — широко и мягко, как умеет только она.' },
        { t: 'wait', ms: 400 },
        { t: 'say', eo: 'Kuketoj!', ru: 'Печенье!', speed: 50 },
        { t: 'wait', ms: 400 },
        { t: 'word', word: 'kuketoj', translation: 'печенье' },
        { t: 'lessonDone', id: 'lesson5' },
        { t: 'wait', ms: 900 }
      ]
    },

    /* =====================================================
       СЦЕНА 9: УРОК 6 — ПРИЛАГАТЕЛЬНЫЕ И MAL-
       ===================================================== */
    {
      id: 'lesson6',
      steps: [
        { t: 'line', text: '' },
        { t: 'line', text: '── KELKAJ MONATOJ POSTE · Несколько месяцев спустя ──', cls: 'sys' },
        { t: 'track', name: 'peaceful', fade: 2.5 },
        { t: 'wait', ms: 900 },
        { t: 'saySweet', text: 'Ты уже почти живёшь в клубе. Ты приходишь почти каждый день.' },
        { t: 'wait', ms: 600 },
        { t: 'say', eo: 'Hodiaŭ — la adjektivoj.', ru: 'Сегодня — прилагательные.', speed: 40 },
        { t: 'wait', ms: 500 },

        { t: 'lesson', title: 'LECIONO 6 · Adjektivoj', subtitle: 'Прилагательные и приставка mal-' },

        { t: 'rule',
          text: 'Прилагательные оканчиваются на -a.',
          ru: 'Как -o для существительных, так -a для описаний.'
        },
        { t: 'wait', ms: 500 },

        { t: 'examples', items: [
          { eo: 'bela', ru: 'красивый' },
          { eo: 'bona', ru: 'хороший' },
          { eo: 'granda', ru: 'большой' },
          { eo: 'varma', ru: 'тёплый' },
          { eo: 'hela', ru: 'светлый' }
        ] },

        { t: 'rule',
          text: 'Приставка mal- делает слово противоположным.',
          ru: 'Это очень удобно: не нужно учить отдельное слово — просто добавь mal-.'
        },
        { t: 'wait', ms: 500 },

        { t: 'examples', items: [
          { eo: 'bona → malbona', ru: 'хороший → плохой' },
          { eo: 'granda → malgranda', ru: 'большой → маленький' },
          { eo: 'varma → malvarma', ru: 'тёплый → холодный' },
          { eo: 'hela → malluma', ru: 'светлый → тёмный' }
        ] },

        { t: 'exercise',
          kind: 'translate',
          q: 'Как сказать «тёмный»?',
          hint: 'Корень — lum (свет) → malluma. Помни правило про приставку.',
          answers: ['malluma'],
          onCorrect: 'Ĝuste. Malluma — тёмный.',
          onWrong: 'Ne tute.',
          answer: 'Malluma.',
          answerRu: 'Тёмный.',
          word: 'malluma', translation: 'тёмный'
        },

        { t: 'exercise',
          kind: 'translate',
          q: 'Как сказать «маленький»?',
          hint: 'granda = большой. Добавь приставку.',
          answers: ['malgranda'],
          onCorrect: 'Ĝuste.',
          onWrong: 'Ne tute.',
          answer: 'Malgranda.',
          answerRu: 'Маленький.',
          word: 'malgranda', translation: 'маленький'
        },

        { t: 'exercise',
          kind: 'choose',
          q: 'Что значит «malvarma»?',
          opts: [
            { label: 'Очень тёплый', correct: false },
            { label: 'Холодный', correct: true },
            { label: 'Сухой', correct: false }
          ],
          onCorrect: 'Ĝuste. Mal- превращает тёплое в холодное.',
          onWrong: 'Ne tute.'
        },

        { t: 'wait', ms: 500 },
        { t: 'line', text: 'Дарина садится рядом. Просто чтобы послушать.', cls: 'ru-muted' },
        { t: 'wait', ms: 500 },
        { t: 'smile', text: 'Она улыбается, глядя на вас обоих. Тихо. Как будто про себя.' },
        { t: 'wait', ms: 700 },

        { t: 'word', word: 'varma', translation: 'тёплый' },
        { t: 'word', word: 'bona', translation: 'хороший' },
        { t: 'lessonDone', id: 'lesson6' },
        { t: 'wait', ms: 900 }
      ]
    },

    /* =====================================================
       СЦЕНА 10: УРОК 7 — ЧИСЛА
       ===================================================== */
    {
      id: 'lesson7',
      steps: [
        { t: 'line', text: '' },
        { t: 'track', name: 'winter', fade: 3 },
        { t: 'saySweet', text: 'Зима. У окна падает снег.' },
        { t: 'wait', ms: 600 },
        { t: 'say', eo: 'Poste — la nombroj.', ru: 'Теперь — числа.', speed: 40 },
        { t: 'wait', ms: 500 },

        { t: 'lesson', title: 'LECIONO 7 · Nombroj', subtitle: 'Числительные' },

        { t: 'rule',
          text: 'Числа от 1 до 10 — учим наизусть. Дальше — просто.',
          ru: '11, 12, 13 строятся как dek unu, dek du, dek tri — «десять и один», «десять и два».'
        },
        { t: 'wait', ms: 500 },

        { t: 'examples', items: [
          { eo: 'unu', ru: 'один' },
          { eo: 'du', ru: 'два' },
          { eo: 'tri', ru: 'три' },
          { eo: 'kvar', ru: 'четыре' },
          { eo: 'kvin', ru: 'пять' },
          { eo: 'ses', ru: 'шесть' },
          { eo: 'sep', ru: 'семь' },
          { eo: 'ok', ru: 'восемь' },
          { eo: 'naŭ', ru: 'девять' },
          { eo: 'dek', ru: 'десять' }
        ] },

        { t: 'examples', items: [
          { eo: 'dek unu', ru: 'одиннадцать' },
          { eo: 'dek du', ru: 'двенадцать' },
          { eo: 'dek tri', ru: 'тринадцать' }
        ] },

        { t: 'exercise',
          kind: 'translate',
          q: 'Как сказать «семь»?',
          hint: 'Три буквы. Начинается с s.',
          answers: ['sep'],
          onCorrect: 'Ĝuste.',
          onWrong: 'Ne tute.',
          answer: 'Sep.',
          answerRu: 'Семь.',
          word: 'sep', translation: 'семь'
        },

        { t: 'exercise',
          kind: 'translate',
          q: 'Как сказать «двенадцать»?',
          hint: 'dek + du.',
          answers: ['dek du'],
          onCorrect: 'Ĝuste.',
          onWrong: 'Ne tute.',
          answer: 'Dek du.',
          answerRu: 'Двенадцать.',
          word: 'dek', translation: 'десять'
        },

        { t: 'exercise',
          kind: 'choose',
          q: 'Как сказать «пять»?',
          opts: [
            { label: 'kvar', correct: false },
            { label: 'kvin', correct: true },
            { label: 'ses', correct: false }
          ],
          onCorrect: 'Ĝuste.',
          onWrong: 'Ne tute. kvin — пять, kvar — четыре, ses — шесть.',
          word: 'kvin', translation: 'пять'
        },

        { t: 'wait', ms: 500 },
        { t: 'saySweet', text: 'Ты повторяешь числа про себя. У тебя в тетради — уже сто сорок сердец.' },
        { t: 'wait', ms: 600 },
        { t: 'line', text: 'Одно на каждый день, что ты провела здесь.', cls: 'ru-muted' },
        { t: 'wait', ms: 600 },
        { t: 'say', eo: 'Vi estas bona lernanto.', ru: 'Ты хорошая ученица.', speed: 35 },
        { t: 'wait', ms: 500 },
        { t: 'say', eo: 'Eble — vi estos instruisto.', ru: 'Может быть — станешь учителем.', speed: 30 },
        { t: 'wait', ms: 700 },
        { t: 'line', text: 'Ты краснеешь. Прячешь улыбку в тетради.', cls: 'ru-muted' },
        { t: 'wait', ms: 700 },
        { t: 'lessonDone', id: 'lesson7' },
        { t: 'wait', ms: 900 }
      ]
    },

    /* =====================================================
       СЦЕНА 11: ФИНАЛ АКТА
       ===================================================== */
    {
      id: 'night',
      steps: [
        { t: 'line', text: '' },
        { t: 'track', name: 'hope', fade: 3 },
        { t: 'saySweet', text: 'Ты выходишь на улицу. Поздний вечер. Тихо.' },
        { t: 'wait', ms: 800 },
        { t: 'saySweet', text: 'Обернувшись, ты видишь два силуэта в окне клуба.' },
        { t: 'wait', ms: 700 },
        { t: 'saySweet', text: 'Они рядом. Дарина что-то говорит. Максим кивает.' },
        { t: 'wait', ms: 700 },
        { t: 'line', text: '' },
        { t: 'line', text: 'Они друзья. Просто друзья.', cls: 'ru' },
        { t: 'line', text: 'Настоящие. И это чувствуется даже отсюда.', cls: 'ru-muted' },
        { t: 'wait', ms: 900 },

        { t: 'track', name: 'memory', fade: 4 },
        { t: 'saySweet', text: 'Ты стоишь на холоде ещё минуту. Смотришь на окно.' },
        { t: 'wait', ms: 700 },
        { t: 'line', text: 'Ты вспоминаешь ту улыбку. Широкую. Красивую.', cls: 'smile' },
        { t: 'wait', ms: 800 },
        { t: 'line', text: 'Её лицо. Движение руки. Тепло.', cls: 'ru-muted' },
        { t: 'wait', ms: 900 },

        { t: 'saySweet', text: 'Ты идёшь домой.' },
        { t: 'wait', ms: 500 },
        { t: 'saySweet', text: 'Ты не знаешь, что через три года всё это исчезнет.' },
        { t: 'wait', ms: 1200 },
        { t: 'line', text: '' },
        { t: 'wait', ms: 900 },
        { t: 'saySweet', text: 'Анна приходила сюда каждый день.' },
        { t: 'wait', ms: 600 },
        { t: 'saySweet', text: 'Три года. Пока не случилось то, что случилось.' },
        { t: 'wait', ms: 900 },
        { t: 'line', text: 'Это — Акт II.', cls: 'ru-muted' },
        { t: 'wait', ms: 1200 }
      ]
    }
  ]
};