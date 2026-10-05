/* =========================================================
   AKTO III — La Nuna Tempo · Наши дни (2024)
   Версия 11.4 — с встроенной ходилкой,
   новыми треками, именем клуба и улыбкой Дарины
   ========================================================= */
window.STORY = window.STORY || {};
window.STORY.act3 = {
  title: 'Акт III — La Nuna Tempo',
  scenes: [

    /* =====================================================
       СЦЕНА 1: КТО ТЫ — ВСТУПЛЕНИЕ + ХОДИЛКА
       ===================================================== */
    {
      id: 'awakening',
      steps: [
        { t: 'track', name: 'silence' },
        { t: 'line', text: '── Akto III · La Nuna Tempo ──', cls: 'sys' },
        { t: 'line', text: '2024 · Наши дни', cls: 'sys' },
        { t: 'wait', ms: 1400 },

        { t: 'line', text: '' },
        { t: 'line', text: 'Ты — не Анна.', cls: 'sys' },
        { t: 'wait', ms: 900 },
        { t: 'line', text: 'Ты никогда не был Анной.', cls: 'sys' },
        { t: 'wait', ms: 1400 },

        { t: 'fx', name: 'black', dur: 2500 },
        { t: 'wait', ms: 2000 },
        { t: 'clearFx' },

        { t: 'track', name: 'night', fade: 4 },

        { t: 'saySweet', text: 'Тебе двадцать три. Ты закончил университет год назад.' },
        { t: 'wait', ms: 700 },
        { t: 'saySweet', text: 'Работаешь в маленькой фирме. Неважно в какой — работа как работа.' },
        { t: 'wait', ms: 700 },
        { t: 'saySweet', text: 'У тебя есть одно увлечение — языки. Английский, немного немецкий.' },
        { t: 'wait', ms: 600 },
        { t: 'saySweet', text: 'Год назад ты начал учить эсперанто. По самоучителю. Медленно. Один.' },
        { t: 'wait', ms: 800 },
        { t: 'line', text: 'Ты знал только два слова: saluton и dankon. Этого не хватало даже для приветствия.' },
        { t: 'wait', ms: 900 },

        { t: 'line', text: '' },
        { t: 'line', text: 'Прошлым летом ты наткнулся в интернете на старую страницу.', cls: 'ru-muted' },
        { t: 'wait', ms: 600 },
        { t: 'clubname', text: 'Клуб «VULPETO ABELETO».' },
        { t: 'wait', ms: 500 },
        { t: 'line', text: 'Маленький. Провинциальный.', cls: 'ru-muted' },
        { t: 'wait', ms: 500 },
        { t: 'line', text: 'Последнее обновление — сентябрь 2013 года.', cls: 'ru-muted' },
        { t: 'wait', ms: 900 },

        { t: 'saySweet', text: 'Ты написал им. Никто не ответил.' },
        { t: 'wait', ms: 600 },
        { t: 'saySweet', text: 'Ты написал ещё раз. Опять молчание.' },
        { t: 'wait', ms: 700 },
        { t: 'saySweet', text: 'И тогда ты решил приехать сам. Просто посмотреть.' },
        { t: 'wait', ms: 900 },

        { t: 'line', text: '' },
        { t: 'line', text: 'Адрес ты помнил наизусть. Три квартала от вокзала.' },
        { t: 'wait', ms: 600 },
        { t: 'line', text: 'Старый деревянный дом. Вывеска почти стёрлась.' },
        { t: 'wait', ms: 700 },

        { t: 'saySweet', text: 'Дверь была открыта.' },
        { t: 'wait', ms: 800 },
        { t: 'saySweet', text: 'Ты вошёл.' },
        { t: 'wait', ms: 700 },
        { t: 'saySweet', text: 'Дверь закрылась за твоей спиной.' },
        { t: 'wait', ms: 900 },

        { t: 'shake' },
        { t: 'flash', strength: 0.4, color: 'black' },
        { t: 'line', text: 'Ты попробовал открыть её снова.' },
        { t: 'wait', ms: 600 },
        { t: 'line', text: 'Она не открывается.' },
        { t: 'wait', ms: 900 },

        { t: 'line', text: '' },
        { t: 'line', text: 'Ты здесь один. Ты не знаешь, что было раньше.' },
        { t: 'wait', ms: 600 },
        { t: 'line', text: 'Ты не знаешь Анну. Не знаешь Дарину. Не знаешь Максима.' },
        { t: 'wait', ms: 700 },
        { t: 'line', text: 'Ты даже не знаешь, что здесь был клуб эсперанто.' },
        { t: 'wait', ms: 800 },

        { t: 'saySweet', text: 'Ты просто хотел посмотреть старый дом.' },
        { t: 'wait', ms: 700 },
        { t: 'saySweet', text: 'Ты просто не знал, что этот дом смотрит на тебя в ответ.' },
        { t: 'wait', ms: 1000 },

        { t: 'line', text: '' },
        { t: 'line', text: 'Ты закрываешь глаза. Пытаешься успокоиться.' },
        { t: 'wait', ms: 700 },
        { t: 'line', text: 'Ты открываешь глаза.' },
        { t: 'wait', ms: 800 },
        { t: 'line', text: 'Холодно. Пахнет пылью и старой бумагой.' },
        { t: 'wait', ms: 700 },
        { t: 'saySweet', text: 'Ты лежишь на полу. Деревянном. Скрипучем.' },
        { t: 'wait', ms: 700 },

        { t: 'saySweet', text: 'Ты садишься. Оглядываешься.' },
        { t: 'wait', ms: 600 },
        { t: 'line', text: 'Комната — большая. Стены из старого дерева. Полки с книгами. Портреты.' },
        { t: 'wait', ms: 500 },
        { t: 'line', text: 'На стене — зелёная звезда. Она светится. Тускло.', cls: 'ru-muted' },
        { t: 'wait', ms: 700 },

        { t: 'saySweet', text: 'На столе лежит тетрадь. Открытая. На последней странице — чей-то рисунок.' },
        { t: 'wait', ms: 700 },
        { t: 'line', text: 'Маленькие сердца. Сто тридцать четыре. И одно — с трещиной.' },
        { t: 'wait', ms: 900 },

        { t: 'glitch' },
        { t: 'wait', ms: 500 },
        { t: 'line', text: 'Ты слышишь голос. Тихий. Женский. Откуда-то из глубины клуба.' },
        { t: 'wait', ms: 700 },

        { t: 'line', text: '«...saluton...»', cls: 'whisper' },
        { t: 'wait', ms: 1100 },

        /* =========================================================
           ВСТРОЕННАЯ ХОДИЛКА
           Игрок переносится внутрь клуба и должен пройти его.
           Управление: launchWalk() в engine.js
           ========================================================= */
        { t: 'wait', ms: 900 },
        { t: 'track', name: 'horror', fade: 2 },
        { t: 'line', text: 'Ты делаешь шаг. И — падаешь.' },
        { t: 'wait', ms: 600 },
        { t: 'hardShake', ms: 800 },
        { t: 'flash', strength: 0.9, color: 'black' },
        { t: 'wait', ms: 800 },

        { t: 'line', text: '' },
        { t: 'saySweet', text: 'Ты открываешь глаза. Ты — внутри.' },
        { t: 'wait', ms: 600 },
        { t: 'saySweet', text: 'Не в здании. В самом клубе. В том, каким он был.' },
        { t: 'wait', ms: 700 },
        { t: 'line', text: 'Ходилка: VULPETO ABELETO — LA SILENTO.', cls: 'sys' },
        { t: 'line', text: 'Найди записки. Выучи слова. Вспомни имя клуба.', cls: 'sys' },
        { t: 'wait', ms: 900 },

        { t: 'walk' },

        { t: 'wait', ms: 600 },
        { t: 'clearFx' },
        { t: 'track', name: 'calm', fade: 2 },
        { t: 'line', text: '' },
        { t: 'saySweet', text: 'Ты снова в коридоре. Сердце бьётся чаще, чем должно.' },
        { t: 'wait', ms: 700 },
        { t: 'line', text: 'Ты не помнишь точно, что было внутри. Только голоса.' },
        { t: 'wait', ms: 700 },
        { t: 'saySweet', text: 'Но слова остались. И ты их знаешь.' },
        { t: 'wait', ms: 800 },
        { t: 'memory', label: 'En la klubo' },
        { t: 'wait', ms: 600 },

        { t: 'glitch' },
        { t: 'wait', ms: 500 },
        { t: 'saySweet', text: 'Ты встаёшь. Ноги — ватные. Но ты идёшь на голос.' },
        { t: 'wait', ms: 900 },

        { t: 'line', text: '' },
        { t: 'line', text: 'Тринадцать лет назад здесь стояла Анна.', cls: 'ru-muted' },
        { t: 'wait', ms: 700 },
        { t: 'line', text: 'Семнадцатилетняя. Одна. Тоже не знала, куда идёт.', cls: 'ru-muted' },
        { t: 'wait', ms: 800 },
        { t: 'line', text: 'Ты не знаешь её имени. Пока.' },
        { t: 'wait', ms: 900 },

        { t: 'line', text: 'Ты — тринадцатый ученик.', cls: 'bad' },
        { t: 'wait', ms: 1200 },
        { t: 'line', text: 'И клуб ждал тебя очень долго.', cls: 'bad' },
        { t: 'wait', ms: 1400 },
        { t: 'memory', label: 'La vekiĝo' },
        { t: 'wait', ms: 900 }
      ]
    },

    /* =====================================================
       СЦЕНА 2: HUB — ПЕРВЫЙ ВИЗИТ
       ===================================================== */
    {
      id: 'hub',
      steps: [
        { t: 'line', text: '' },
        { t: 'track', name: 'vestiblo', fade: 2.5 },
        { t: 'line', text: '── LA KLUBO · Клуб ──', cls: 'sys' },
        { t: 'wait', ms: 900 },

        { t: 'saySweet', text: 'Ты стоишь в центральном коридоре. Пять дверей. Все — приоткрыты.' },
        { t: 'wait', ms: 600 },
        { t: 'line', text: 'Входная дверь за твоей спиной заперта. Ты не помнишь, чтобы запирал её.' },
        { t: 'wait', ms: 700 },
        { t: 'line', text: 'Голос шёл откуда-то отсюда. Из одной из этих комнат.' },
        { t: 'wait', ms: 800 },

        { t: 'choose',
          opts: [
            { label: '→ Библиотека (слева)' },
            { label: '→ Зеркальный зал (справа)' },
            { label: '→ Подвал (вниз)' },
            { label: '→ Сад (через окно)' },
            { label: '→ Часовня (по лестнице)' }
          ],
          goto: ['room_library', 'room_mirror', 'room_den', 'room_garden', 'chapel_router']
        }
      ]
    },

    /* =====================================================
       HUB RETURN — только выбор комнаты
       ===================================================== */
    {
      id: 'hub_return',
      steps: [
        { t: 'line', text: '' },
        { t: 'line', text: '── LA KLUBO · Клуб ──', cls: 'sys' },
        { t: 'choose',
          opts: [
            { label: '→ Библиотека (слева)' },
            { label: '→ Зеркальный зал (справа)' },
            { label: '→ Подвал (вниз)' },
            { label: '→ Сад (через окно)' },
            { label: '→ Часовня (по лестнице)' }
          ],
          goto: ['room_library', 'room_mirror', 'room_den', 'room_garden', 'chapel_router']
        }
      ]
    },

    /* =====================================================
       КОМНАТА: БИБЛИОТЕКА
       ===================================================== */
    {
      id: 'room_library',
      steps: [
        { t: 'branch', flag: 'library_done',
          then: 'library_again', else: 'library_first' }
      ]
    },
    {
      id: 'library_first',
      steps: [
        { t: 'line', text: '' },
        { t: 'track', name: 'biblioteko', fade: 2.5 },
        { t: 'line', text: '── BIBLIOTEKO · Библиотека ──', cls: 'sys' },
        { t: 'wait', ms: 900 },

        { t: 'saySweet', text: 'Полки до потолка. Пыль. Свет откуда-то сверху, хотя окон нет.' },
        { t: 'wait', ms: 600 },
        { t: 'line', text: 'На полу — раскрытая книга. Её страницы переворачиваются сами.' },
        { t: 'wait', ms: 700 },

        { t: 'say', eo: 'Bonvenon, lernanto dek-tria.', ru: 'Добро пожаловать, тринадцатый ученик.', speed: 35 },
        { t: 'wait', ms: 600 },
        { t: 'say', eo: 'Ni daŭrigu la kurson.', ru: 'Продолжим курс.', speed: 40 },
        { t: 'wait', ms: 700 },

        { t: 'lesson', title: 'LECIONO 13 · Kompleksaj tempoj', subtitle: 'Сложные времена' },

        { t: 'rule',
          text: 'Кроме простых -as/-is/-os, есть «составные» времена: esti + активное причастие.',
          ru: 'Они уточняют оттенок: длительность, результат, предстояние.'
        },
        { t: 'wait', ms: 500 },

        { t: 'examples', items: [
          { eo: 'mi estas leganta', ru: 'я сейчас читаю' },
          { eo: 'mi estis leganta', ru: 'я читал (в тот момент)' },
          { eo: 'mi estos leganta', ru: 'я буду читать (в процессе)' },
          { eo: 'mi estas leginta', ru: 'я уже прочитал' },
          { eo: 'mi estis leginta', ru: 'я уже прочитал (к тому моменту)' }
        ] },

        { t: 'rule',
          text: '-anta — сейчас, -inta — раньше, -onta — потом.',
          ru: 'Это причастие, оно согласуется с существительным как прилагательное.'
        },
        { t: 'wait', ms: 500 },

        { t: 'exercise',
          kind: 'translate',
          q: 'Как сказать «Я сейчас читаю»?',
          hint: 'estas + leganta.',
          answers: ['mi estas leganta'],
          onCorrect: 'Ĝuste.',
          onWrong: 'Ne tute.',
          answer: 'Mi estas leganta.',
          answerRu: 'Я сейчас читаю.',
          word: 'leganta', translation: 'читающий (сейчас)'
        },

        { t: 'exercise',
          kind: 'choose',
          q: 'Что значит «Ŝi estis leginta la libron»?',
          opts: [
            { label: 'Она читала книгу', correct: false },
            { label: 'Она уже прочитала книгу (к тому моменту)', correct: true },
            { label: 'Она будет читать книгу', correct: false }
          ],
          onCorrect: 'Ĝuste. Estis leginta — результат к моменту.',
          onWrong: 'Ne tute. -inta — действие уже завершено.'
        },

        { t: 'exercise',
          kind: 'fill',
          q: 'Заполни: «Kiam vi alvenos, ni estos fin__ la laboron».',
          hint: 'estos fin- + причастие прошедшего времени -inta, мн.ч. -j.',
          answers: ['intaj', 'finintaj', 'ni estos finintaj'],
          onCorrect: 'Ĝuste. Ni estos finintaj.',
          onWrong: 'Ne tute. Ni estos finintaj.',
          answer: 'finintaj'
        },

        { t: 'wait', ms: 500 },
        { t: 'saySweet', text: 'Книга закрывается сама. Ты слышишь тихий смех.' },
        { t: 'wait', ms: 600 },
        { t: 'line', text: '«...иди дальше...»', cls: 'whisper' },
        { t: 'wait', ms: 900 },

        { t: 'word', word: 'leginta', translation: 'прочитавший' },
        { t: 'lessonDone', id: 'lesson13' },
        { t: 'setFlag', flag: 'library_done' },
        { t: 'wait', ms: 500 },
        { t: 'choose', opts: [{ label: '← Вернуться в коридор' }], goto: ['hub_return'] }
      ]
    },
    {
      id: 'library_again',
      steps: [
        { t: 'line', text: '' },
        { t: 'track', name: 'calm', fade: 1.5 },
        { t: 'line', text: '── BIBLIOTEKO · Библиотека ──', cls: 'sys' },
        { t: 'wait', ms: 500 },
        { t: 'saySweet', text: 'Ты уже был здесь. Книга закрыта. Страницы больше не шевелятся.' },
        { t: 'wait', ms: 700 },
        { t: 'choose', opts: [{ label: '← Вернуться в коридор' }], goto: ['hub_return'] }
      ]
    },

    /* =====================================================
       КОМНАТА: ЗЕРКАЛЬНЫЙ ЗАЛ
       ===================================================== */
    {
      id: 'room_mirror',
      steps: [
        { t: 'branch', flag: 'mirror_done',
          then: 'mirror_again', else: 'mirror_first' }
      ]
    },
    {
      id: 'mirror_first',
      steps: [
        { t: 'line', text: '' },
        { t: 'track', name: 'spegula', fade: 2.5 },
        { t: 'line', text: '── SPEGULA ĈAMBRO · Зеркальный зал ──', cls: 'sys' },
        { t: 'wait', ms: 900 },

        { t: 'saySweet', text: 'Дюжина зеркал вдоль стен. Твоё отражение — везде. Но не совсем твоё.' },
        { t: 'wait', ms: 600 },
        { t: 'line', text: 'В каждом зеркале — ты, но старше. Или моложе. Или бледнее.' },
        { t: 'wait', ms: 700 },

        { t: 'say', eo: 'Vi venis.', ru: 'Ты пришёл.', speed: 45 },
        { t: 'wait', ms: 500 },
        { t: 'line', text: 'Голос идёт из самого дальнего зеркала. Ты подходишь.' },
        { t: 'wait', ms: 700 },
        { t: 'line', text: 'В зеркале — девушка. Лет девятнадцати. Светлые волосы. Печальные глаза.' },
        { t: 'wait', ms: 700 },

        { t: 'say', eo: 'Mi estas Anna.', ru: 'Я — Анна.', speed: 45 },
        { t: 'wait', ms: 500 },
        { t: 'say', eo: 'Vi aŭdis pri mi, ĉu ne?', ru: 'Ты слышал обо мне, да?', speed: 40 },
        { t: 'wait', ms: 700 },

        { t: 'line', text: 'Ты качаешь головой. Ты ничего не слышал. Ты здесь случайно.' },
        { t: 'wait', ms: 800 },

        { t: 'say', eo: 'Bone. Tiam mi diros.', ru: 'Хорошо. Тогда я расскажу.', speed: 35 },
        { t: 'wait', ms: 600 },
        { t: 'say', eo: 'Mi estis la oka lernanto.', ru: 'Я была восьмой ученицей.', speed: 35 },
        { t: 'wait', ms: 500 },
        { t: 'say', eo: 'Poste — la dek-dua. Kaj nun mi atendas la dek-trian.', ru: 'Потом — двенадцатой. И теперь я жду тринадцатого.', speed: 30 },
        { t: 'wait', ms: 800 },

        { t: 'line', text: '«Тринадцатый — это ты», — говорит она тихо.' },
        { t: 'wait', ms: 800 },

        { t: 'say', eo: 'Ne timu min.', ru: 'Не бойся меня.', speed: 40 },
        { t: 'wait', ms: 500 },
        { t: 'say', eo: 'Mi volas helpi vin.', ru: 'Я хочу помочь тебе.', speed: 35 },
        { t: 'wait', ms: 700 },

        { t: 'memory', label: 'Anna parolas' },
        { t: 'wait', ms: 800 },

        { t: 'lesson', title: 'LECIONO 14 · Korelativoj', subtitle: 'Таблица 45 слов — часть первая' },

        { t: 'rule',
          text: 'Коррелятивы образуются по формуле: 5 приставок × 9 суффиксов.',
          ru: 'ki- (вопрос), ti- (указание), i- (неопред.), ĉi- (всеобщность), neni- (отрицание).'
        },
        { t: 'wait', ms: 500 },

        { t: 'examples', items: [
          { eo: 'kiu — кто', ru: 'tiu — тот' },
          { eo: 'kio — что', ru: 'tio — то' },
          { eo: 'kie — где', ru: 'tie — там' },
          { eo: 'kiam — когда', ru: 'tiam — тогда' },
          { eo: 'kial — почему', ru: 'tial — поэтому' },
          { eo: 'kiel — как', ru: 'tiel — так' }
        ] },

        { t: 'rule',
          text: 'Вопрос на ki- почти всегда отвечает ti-.',
          ru: 'Kie vi estas? — Tie. Kiam li venos? — Tiam.'
        },
        { t: 'wait', ms: 500 },

        { t: 'exercise',
          kind: 'translate',
          q: 'Как сказать «где»?',
          hint: 'ki + суффикс места.',
          answers: ['kie'],
          onCorrect: 'Ĝuste.',
          onWrong: 'Ne tute. Kie.',
          answer: 'Kie.',
          answerRu: 'Где.',
          word: 'kie', translation: 'где'
        },

        { t: 'exercise',
          kind: 'choose',
          q: 'Что значит «ĉiam»?',
          opts: [
            { label: 'никогда', correct: false },
            { label: 'всегда', correct: true },
            { label: 'иногда', correct: false }
          ],
          onCorrect: 'Ĝuste. Ĉi- + -am = всегда.',
          onWrong: 'Ne tute. Ĉiam — всегда.'
        },

        { t: 'exercise',
          kind: 'translate',
          q: 'Как сказать «никто»?',
          hint: 'neni- + -u.',
          answers: ['neniu'],
          onCorrect: 'Ĝuste.',
          onWrong: 'Ne tute. Neniu.',
          answer: 'Neniu.',
          answerRu: 'Никто.',
          word: 'neniu', translation: 'никто'
        },

        { t: 'wait', ms: 700 },
        { t: 'line', text: 'Анна улыбается. Слабо. Как будто через стекло.' },
        { t: 'wait', ms: 600 },
        { t: 'say', eo: 'Kiam vi estos preta — venu al la kapelo.', ru: 'Когда будешь готов — приходи в часовню.', speed: 35 },
        { t: 'wait', ms: 600 },
        { t: 'say', eo: 'Kune kun Darina kaj Maksim.', ru: 'Вместе с Дариной и Максимом.', speed: 35 },
        { t: 'wait', ms: 700 },

        { t: 'line', text: 'Ты хочешь спросить больше. Но зеркало пустеет.' },
        { t: 'wait', ms: 900 },

        { t: 'word', word: 'kie', translation: 'где' },
        { t: 'word', word: 'ĉiam', translation: 'всегда' },
        { t: 'word', word: 'neniu', translation: 'никто' },
        { t: 'lessonDone', id: 'lesson14' },
        { t: 'setFlag', flag: 'mirror_done' },
        { t: 'wait', ms: 500 },
        { t: 'choose', opts: [{ label: '← Вернуться в коридор' }], goto: ['hub_return'] }
      ]
    },
    {
      id: 'mirror_again',
      steps: [
        { t: 'line', text: '' },
        { t: 'track', name: 'calm', fade: 1.5 },
        { t: 'line', text: '── SPEGULA ĈAMBRO · Зеркальный зал ──', cls: 'sys' },
        { t: 'wait', ms: 500 },
        { t: 'saySweet', text: 'Зеркала больше не показывают тебя. Только пустоту.' },
        { t: 'wait', ms: 700 },
        { t: 'choose', opts: [{ label: '← Вернуться в коридор' }], goto: ['hub_return'] }
      ]
    },

    /* =====================================================
       КОМНАТА: ПОДВАЛ
       ===================================================== */
    {
      id: 'room_den',
      steps: [
        { t: 'branch', flag: 'den_done',
          then: 'den_again', else: 'den_first' }
      ]
    },
    {
      id: 'den_first',
      steps: [
        { t: 'line', text: '' },
        { t: 'track', name: 'kelo', fade: 2.5 },
        { t: 'line', text: '── KELO · Подвал ──', cls: 'sys' },
        { t: 'wait', ms: 1000 },

        { t: 'saySweet', text: 'Спуск по скрипучей лестнице. Темно. Ты идёшь на ощупь.' },
        { t: 'wait', ms: 600 },
        { t: 'line', text: 'Внизу — огромное пустое пространство. Гул. Никаких стен.' },
        { t: 'wait', ms: 700 },

        { t: 'shake' },
        { t: 'line', text: 'Голос. Мужской. Спокойный. Незнакомый.', cls: 'bad' },
        { t: 'wait', ms: 800 },

        { t: 'say', eo: 'Vi venis al mi.', ru: 'Ты пришёл ко мне.', speed: 40 },
        { t: 'wait', ms: 600 },
        { t: 'say', eo: 'Bone. Tre bone.', ru: 'Хорошо. Очень хорошо.', speed: 45 },
        { t: 'wait', ms: 700 },

        { t: 'line', text: 'Ты не видишь его. Но чувствуешь, как он улыбается.' },
        { t: 'wait', ms: 800 },

        { t: 'say', eo: 'Antaŭ ol vi foriros — vi lernos ankoraŭ ion.', ru: 'Прежде чем ты уйдёшь — ты выучишь ещё кое-что.', speed: 35 },
        { t: 'wait', ms: 600 },
        { t: 'say', eo: 'Pri espero. Pri timo. Pri vero.', ru: 'О надежде. О страхе. О правде.', speed: 35 },
        { t: 'wait', ms: 700 },

        { t: 'lesson', title: 'LECIONO 15 · Timo, Espero, Vero', subtitle: 'Три слова — три вопроса' },

        { t: 'rule',
          text: 'Три важных слова. Каждое ты уже слышал.',
          ru: 'Timo — страх. Espero — надежда. Vero — истина. Запомни их.'
        },
        { t: 'wait', ms: 500 },

        { t: 'examples', items: [
          { eo: 'timo', ru: 'страх' },
          { eo: 'espero', ru: 'надежда' },
          { eo: 'vero', ru: 'истина' },
          { eo: 'lumo', ru: 'свет' },
          { eo: 'mallumo', ru: 'тьма' }
        ] },

        { t: 'exercise',
          kind: 'translate',
          q: 'Как сказать «страх»?',
          hint: 'Четыре буквы, начинается с t.',
          answers: ['timo'],
          onCorrect: 'Ĝuste.',
          onWrong: 'Ne tute. Timo.',
          answer: 'Timo.',
          answerRu: 'Страх.',
          word: 'timo', translation: 'страх'
        },

        { t: 'exercise',
          kind: 'translate',
          q: 'Как сказать «надежда»?',
          hint: 'От глагола esperi.',
          answers: ['espero'],
          onCorrect: 'Ĝuste.',
          onWrong: 'Ne tute. Espero.',
          answer: 'Espero.',
          answerRu: 'Надежда.',
          word: 'espero', translation: 'надежда'
        },

        { t: 'exercise',
          kind: 'choose',
          q: 'Что значит «vero»?',
          opts: [
            { label: 'вера', correct: false },
            { label: 'истина', correct: true },
            { label: 'весна', correct: false }
          ],
          onCorrect: 'Ĝuste. Vero — истина.',
          onWrong: 'Ne tute. Vero — истина.'
        },

        { t: 'wait', ms: 700 },
        { t: 'line', text: 'Голос становится тише. Но он смеётся.' },
        { t: 'wait', ms: 600 },
        { t: 'say', eo: 'Vi pensas, ke vi povos foriri.', ru: 'Ты думаешь, что сможешь уйти.', speed: 35 },
        { t: 'wait', ms: 500 },
        { t: 'say', eo: 'Vi eraras.', ru: 'Ты ошибаешься.', speed: 40 },
        { t: 'wait', ms: 700 },

        { t: 'silence', ms: 2000 },
        { t: 'flash', strength: 0.5, color: 'white' },
        { t: 'hardShake', ms: 500 },
        { t: 'scare', kind: 'organic', opts: { intensity: 'hard', force: true } },
        { t: 'wait', ms: 1000 },

        { t: 'line', text: 'Ты закрываешь глаза. Когда открываешь — ты снова наверху.' },
        { t: 'wait', ms: 900 },

        { t: 'word', word: 'timo', translation: 'страх' },
        { t: 'word', word: 'espero', translation: 'надежда' },
        { t: 'word', word: 'vero', translation: 'истина' },
        { t: 'lessonDone', id: 'lesson15' },
        { t: 'setFlag', flag: 'den_done' },
        { t: 'wait', ms: 500 },
        { t: 'choose', opts: [{ label: '← Вернуться в коридор' }], goto: ['hub_return'] }
      ]
    },
    {
      id: 'den_again',
      steps: [
        { t: 'line', text: '' },
        { t: 'track', name: 'calm', fade: 1.5 },
        { t: 'line', text: '── KELO · Подвал ──', cls: 'sys' },
        { t: 'wait', ms: 500 },
        { t: 'saySweet', text: 'Пусто. Ни голоса, ни тени.' },
        { t: 'wait', ms: 700 },
        { t: 'choose', opts: [{ label: '← Вернуться в коридор' }], goto: ['hub_return'] }
      ]
    },

    /* =====================================================
       КОМНАТА: САД
       ===================================================== */
    {
      id: 'room_garden',
      steps: [
        { t: 'branch', flag: 'garden_done',
          then: 'garden_again', else: 'garden_first' }
      ]
    },
    {
      id: 'garden_first',
      steps: [
        { t: 'line', text: '' },
        { t: 'track', name: 'gardeno', fade: 3 },
        { t: 'line', text: '── ĜARDENO · Сад ──', cls: 'sys' },
        { t: 'wait', ms: 1000 },

        { t: 'saySweet', text: 'Ты вылезаешь через окно. За окном — сад. Или то, что от него осталось.' },
        { t: 'wait', ms: 600 },
        { t: 'line', text: 'Высокая трава. Белые цветы. Два призрачных силуэта.' },
        { t: 'wait', ms: 700 },

        { t: 'saySweet', text: 'Мужчина. Женщина. Они рядом. Держатся за руки.' },
        { t: 'wait', ms: 600 },
        { t: 'line', text: 'Не как влюблённые. Как брат и сестра.' },
        { t: 'wait', ms: 700 },

        { t: 'say', eo: 'Saluton.', ru: 'Привет.', speed: 50 },
        { t: 'wait', ms: 500 },
        { t: 'say', eo: 'Mi estas Maksim.', ru: 'Я — Максим.', speed: 45 },
        { t: 'wait', ms: 500 },
        { t: 'say', eo: 'Kaj mi estas Darina.', ru: 'А я — Дарина.', speed: 45 },
        { t: 'wait', ms: 700 },

        { t: 'say', eo: 'Ni fondis tiun klubon.', ru: 'Мы основали этот клуб.', speed: 35 },
        { t: 'wait', ms: 500 },
        { t: 'say', eo: 'Antaŭ multaj jaroj.', ru: 'Много лет назад.', speed: 35 },
        { t: 'wait', ms: 700 },

        { t: 'memory', label: 'La fondintoj' },
        { t: 'wait', ms: 900 },

        { t: 'say', eo: 'Ni faris ĉion kune.', ru: 'Мы делали всё вместе.', speed: 35 },
        { t: 'wait', ms: 500 },
        { t: 'say', eo: 'Ĉiun projekton. Ĉiun lecionon. Ĉiun feston.', ru: 'Каждый проект. Каждый урок. Каждый праздник.', speed: 30 },
        { t: 'wait', ms: 700 },

        { t: 'say', eo: 'Mi lernis Esperanton.', ru: 'Я учил эсперанто.', speed: 40 },
        { t: 'wait', ms: 500 },
        { t: 'say', eo: 'Kaj ŝi ĉiam subtenis min.', ru: 'А она всегда поддерживала меня.', speed: 40 },
        { t: 'wait', ms: 700 },

        { t: 'line', text: 'Дарина кивает. Улыбается. Смотрит на него — как сестра на брата.' },
        { t: 'wait', ms: 500 },
        { t: 'smile', text: 'Ты видишь её улыбку. Даже сейчас — призрачную, слабую — она широкая и красивая. Как тогда.' },
        { t: 'wait', ms: 700 },

        { t: 'say', eo: 'Ni estis amikoj. Nur amikoj.', ru: 'Мы были друзьями. Только друзьями.', speed: 35 },
        { t: 'wait', ms: 500 },
        { t: 'say', eo: 'Kaj tio estis bela.', ru: 'И это было прекрасно.', speed: 40 },
        { t: 'wait', ms: 800 },

        { t: 'memory', label: 'Ĉiam kune' },
        { t: 'word', word: 'amikeco', translation: 'дружба' },
        { t: 'wait', ms: 900 },

        { t: 'lesson', title: 'LECIONO 16 · Malfermitaj demandoj', subtitle: 'Открытые и вежливые вопросы' },

        { t: 'rule',
          text: 'Вежливый вопрос — с ĉu или с -us.',
          ru: 'Ĉu vi povus... — Не могли бы вы... Se vi volus... — Если бы вы хотели...'
        },
        { t: 'wait', ms: 500 },

        { t: 'examples', items: [
          { eo: 'Ĉu vi povus helpi min?', ru: 'Не могли бы вы помочь?' },
          { eo: 'Ĉu vi volus kafon?', ru: 'Хотели бы вы кофе?' },
          { eo: 'Se vi permesos...', ru: 'Если позволите...' },
          { eo: 'Kion vi pensas?', ru: 'Что вы думаете?' }
        ] },

        { t: 'exercise',
          kind: 'translate',
          q: 'Как вежливо спросить «Не могли бы вы помочь мне»?',
          hint: 'ĉu + vi + povus + helpi + min.',
          answers: ['ĉu vi povus helpi min', 'cu vi povus helpi min'],
          onCorrect: 'Ĝuste.',
          onWrong: 'Ne tute. Ĉu vi povus helpi min?',
          answer: 'Ĉu vi povus helpi min?',
          answerRu: 'Не могли бы вы помочь мне?'
        },

        { t: 'exercise',
          kind: 'choose',
          q: 'Какое обращение вежливее?',
          opts: [
            { label: 'Helpu min!', correct: false },
            { label: 'Ĉu vi povus helpi min?', correct: true },
            { label: 'Vi helpos min.', correct: false }
          ],
          onCorrect: 'Ĝuste. Ĉu vi povus — самая вежливая форма.',
          onWrong: 'Ne tute. -us делает просьбу вежливой.'
        },

        { t: 'wait', ms: 700 },
        { t: 'saySweet', text: 'Дарина смотрит на тебя. Долго.' },
        { t: 'wait', ms: 600 },
        { t: 'say', eo: 'Anna atendas vin en la kapelo.', ru: 'Анна ждёт тебя в часовне.', speed: 35 },
        { t: 'wait', ms: 500 },
        { t: 'say', eo: 'Iru al ŝi. Ŝi bezonas vin.', ru: 'Иди к ней. Ты ей нужен.', speed: 35 },
        { t: 'wait', ms: 700 },

        { t: 'say', eo: 'Kaj poste — vi elektos.', ru: 'А потом — ты выберешь.', speed: 40 },
        { t: 'wait', ms: 700 },

        { t: 'word', word: 'povus', translation: 'мог бы' },
        { t: 'lessonDone', id: 'lesson16' },
        { t: 'setFlag', flag: 'garden_done' },
        { t: 'wait', ms: 500 },
        { t: 'choose', opts: [{ label: '← Вернуться в коридор' }], goto: ['hub_return'] }
      ]
    },
    {
      id: 'garden_again',
      steps: [
        { t: 'line', text: '' },
        { t: 'track', name: 'calm', fade: 1.5 },
        { t: 'line', text: '── ĜARDENO · Сад ──', cls: 'sys' },
        { t: 'wait', ms: 500 },
        { t: 'saySweet', text: 'Сад пуст. Только трава и цветы.' },
        { t: 'wait', ms: 700 },
        { t: 'choose', opts: [{ label: '← Вернуться в коридор' }], goto: ['hub_return'] }
      ]
    },

    /* =====================================================
       ЧАСОВНЯ — роутер
       ===================================================== */
    {
      id: 'chapel_router',
      steps: [
        { t: 'branch', flag: 'boss_done',
          then: 'chapel_after_router', else: 'chapel_first' }
      ]
    },

    /* =====================================================
       ЧАСОВНЯ — первый визит
       ===================================================== */
    {
      id: 'chapel_first',
      steps: [
        { t: 'line', text: '' },
        { t: 'track', name: 'kapelo', fade: 3 },
        { t: 'line', text: '── KAPELO · Часовня ──', cls: 'sys' },
        { t: 'wait', ms: 1200 },

        { t: 'saySweet', text: 'Свечи. Дюжина. Горят, хотя их никто не зажигал.' },
        { t: 'wait', ms: 600 },
        { t: 'line', text: 'В центре — алтарь. На нём — книга. И зелёная звезда.' },
        { t: 'wait', ms: 700 },

        { t: 'line', text: 'Анна стоит у алтаря. Дарина и Максим — рядом.' },
        { t: 'wait', ms: 700 },

        { t: 'say', eo: 'Vi venis.', ru: 'Ты пришёл.', speed: 45 },
        { t: 'wait', ms: 500 },
        { t: 'say', eo: 'Nun — la lastaj demandoj.', ru: 'Теперь — последние вопросы.', speed: 40 },
        { t: 'wait', ms: 700 },

        { t: 'saySweet', text: 'Ты чувствуешь, как что-то огромное поднимается из-под пола.' },
        { t: 'wait', ms: 600 },
        { t: 'line', text: 'Тени. Голоса. Знакомые и нет.' },
        { t: 'wait', ms: 800 },

        { t: 'line', text: 'Это — Он.', cls: 'bad' },
        { t: 'wait', ms: 900 },
        { t: 'line', text: 'La Mallumo.', cls: 'bad' },
        { t: 'wait', ms: 1200 },

        { t: 'track', name: 'chaos', fade: 1 },
        { t: 'silence', ms: 400 },
        { t: 'flash', strength: 0.6, color: 'red' },
        { t: 'hardShake', ms: 800 },
        { t: 'wait', ms: 800 },

        { t: 'say', eo: 'VI NE FORIROS.', ru: 'ТЫ НЕ УЙДЁШЬ.', speed: 60 },
        { t: 'wait', ms: 800 },
        { t: 'say', eo: 'VI RESTOS. KIEL ĈIUJ.', ru: 'ТЫ ОСТАНЕШЬСЯ. КАК ВСЕ.', speed: 60 },
        { t: 'wait', ms: 1000 },

        { t: 'saySweet', text: 'Анна загораживает тебя. Дарина сжимает твою руку. Максим встаёт между.' },
        { t: 'wait', ms: 500 },
        { t: 'smile', text: 'На секунду ты видишь улыбку Дарины. Ту самую. Широкую. Она не боится.' },
        { t: 'wait', ms: 600 },
        { t: 'say', eo: 'Ne. Li ne restos.', ru: 'Нет. Он не останется.', speed: 40 },
        { t: 'wait', ms: 700 },

        { t: 'say', eo: 'Respondo estos nia.', ru: 'Ответ будет нашим.', speed: 40 },
        { t: 'wait', ms: 800 },

        { t: 'lesson', title: 'LECIONO 17 · Tri respondoj', subtitle: 'Три ответа — три вопроса' },

        { t: 'rule',
          text: 'Перед последним боем — три слова. Ты должен знать их точно.',
          ru: 'Это те же три слова: Timo, Espero, Vero.'
        },
        { t: 'wait', ms: 500 },

        { t: 'exercise',
          kind: 'translate',
          q: 'Что значит «timo»?',
          hint: 'Одно из трёх ключевых слов.',
          answers: ['страх', 'timo'],
          onCorrect: 'Ĝuste.',
          onWrong: 'Ne tute. Timo — страх.',
          answer: 'Timo — страх.',
          answerRu: 'Страх.'
        },

        { t: 'exercise',
          kind: 'translate',
          q: 'Что значит «espero»?',
          hint: 'Одно из трёх ключевых слов.',
          answers: ['надежда', 'espero'],
          onCorrect: 'Ĝuste.',
          onWrong: 'Ne tute. Espero — надежда.',
          answer: 'Espero — надежда.',
          answerRu: 'Надежда.'
        },

        { t: 'exercise',
          kind: 'translate',
          q: 'Что значит «vero»?',
          hint: 'Одно из трёх ключевых слов.',
          answers: ['истина', 'правда', 'vero'],
          onCorrect: 'Ĝuste.',
          onWrong: 'Ne tute. Vero — истина.',
          answer: 'Vero — истина.',
          answerRu: 'Истина.'
        },

        { t: 'wait', ms: 700 },
        { t: 'saySweet', text: 'Анна выходит вперёд. Голос её звучит громко.' },
        { t: 'wait', ms: 600 },

        /* ---- БОСС-БИТВА ---- */
        { t: 'ask',
          q: 'La Mallumo: «Kion vi sentas nun?» (Что ты чувствуешь?)',
          hint: 'Ответь одним из трёх слов: timo, espero или vero.',
          answers: ['espero', 'надежда'],
          onCorrect: 'Vi elektis esperon. La Mallumo ŝanceliĝas.',
          onWrong: 'Vi hezitas... La Mallumo ridas.',
          answer: 'Espero.',
          answerRu: 'Надежда.',
          word: 'espero', translation: 'надежда'
        },

        { t: 'wait', ms: 700 },
        { t: 'ask',
          q: 'La Mallumo: «Kion vi serĉas?» (Что ты ищешь?)',
          hint: 'Ответь одним из трёх слов.',
          answers: ['veron', 'vero', 'истину', 'правду'],
          onCorrect: 'Vi elektis veron. La Mallumo malgrandiĝas.',
          onWrong: 'Vi serĉas... ion alian. La Mallumo kreskas.',
          answer: 'Veron.',
          answerRu: 'Истину.',
          word: 'vero', translation: 'истина'
        },

        { t: 'wait', ms: 700 },
        { t: 'ask',
          q: 'La Mallumo: «Kion vi donos al mi?» (Что ты отдашь мне?)',
          hint: 'Последний ответ.',
          answers: ['timon', 'timo', 'страх'],
          onCorrect: 'Vi donas al li timon. Li dissolviĝas.',
          onWrong: 'Vi ne scias, kion doni. La Mallumo atendas.',
          answer: 'Timon.',
          answerRu: 'Страх.',
          word: 'timo', translation: 'страх'
        },

        { t: 'wait', ms: 900 },
        { t: 'track', name: 'void', fade: 1 },
        { t: 'silence', ms: 800 },
        { t: 'flash', strength: 0.8, color: 'white' },
        { t: 'hardShake', ms: 1200 },
        { t: 'scare', kind: 'organic', opts: { intensity: 'hard', force: true } },
        { t: 'wait', ms: 1400 },

        { t: 'saySweet', text: 'La Mallumo рассыпается. Тени растворяются. Свет становится ярче.' },
        { t: 'wait', ms: 900 },

        { t: 'say', eo: 'Vi faris ĝin.', ru: 'Ты справился.', speed: 45 },
        { t: 'wait', ms: 700 },
        { t: 'say', eo: 'Sed vi devas elekti nun.', ru: 'Но ты должен выбрать сейчас.', speed: 40 },
        { t: 'wait', ms: 700 },

        { t: 'memory', label: 'La lasta demando' },
        { t: 'word', word: 'mallumo', translation: 'тьма' },
        { t: 'lessonDone', id: 'lesson17' },
        { t: 'setFlag', flag: 'boss_done' },
        { t: 'wait', ms: 1200 },

        { t: 'saySweet', text: 'Ты можешь поговорить с кем-то перед финалом. Или сразу идти.' },
        { t: 'wait', ms: 700 },

        { t: 'choose',
          opts: [
            { label: '→ Спросить у Анны' },
            { label: '→ Спросить у Дарины и Максима' },
            { label: '→ Пройти к финалу' }
          ],
          goto: ['talk_anna', 'talk_dm', 'finale']
        }
      ]
    },

    /* =====================================================
       ЧАСОВНЯ — роутеры после босса
       ===================================================== */
    {
      id: 'chapel_after_router',
      steps: [
        { t: 'branch', flag: 'talked_anna',
          then: 'chapel_router_dm', else: 'chapel_router_no_anna' }
      ]
    },
    {
      id: 'chapel_router_dm',
      steps: [
        { t: 'branch', flag: 'talked_dm',
          then: 'chapel_choice_none_left', else: 'chapel_choice_dm_only' }
      ]
    },
    {
      id: 'chapel_router_no_anna',
      steps: [
        { t: 'branch', flag: 'talked_dm',
          then: 'chapel_choice_anna_only', else: 'chapel_choice_both' }
      ]
    },
    {
      id: 'chapel_choice_both',
      steps: [
        { t: 'line', text: '' },
        { t: 'line', text: '── KAPELO · Часовня ──', cls: 'sys' },
        { t: 'wait', ms: 500 },
        { t: 'saySweet', text: 'Ты снова у алтаря. Анна, Дарина и Максим молча ждут.' },
        { t: 'wait', ms: 700 },
        { t: 'choose',
          opts: [
            { label: '→ Спросить у Анны' },
            { label: '→ Спросить у Дарины и Максима' },
            { label: '→ Пройти к финалу' }
          ],
          goto: ['talk_anna', 'talk_dm', 'finale']
        }
      ]
    },
    {
      id: 'chapel_choice_anna_only',
      steps: [
        { t: 'line', text: '' },
        { t: 'line', text: '── KAPELO · Часовня ──', cls: 'sys' },
        { t: 'wait', ms: 500 },
        { t: 'saySweet', text: 'Анна всё ещё у алтаря. Дарина и Максим уже сказали своё.' },
        { t: 'wait', ms: 700 },
        { t: 'choose',
          opts: [
            { label: '→ Спросить у Анны' },
            { label: '→ Пройти к финалу' }
          ],
          goto: ['talk_anna', 'finale']
        }
      ]
    },
    {
      id: 'chapel_choice_dm_only',
      steps: [
        { t: 'line', text: '' },
        { t: 'line', text: '── KAPELO · Часовня ──', cls: 'sys' },
        { t: 'wait', ms: 500 },
        { t: 'saySweet', text: 'Дарина и Максим всё ещё рядом. Ты можешь поговорить с ними.' },
        { t: 'wait', ms: 700 },
        { t: 'choose',
          opts: [
            { label: '→ Спросить у Дарины и Максима' },
            { label: '→ Пройти к финалу' }
          ],
          goto: ['talk_dm', 'finale']
        }
      ]
    },
    {
      id: 'chapel_choice_none_left',
      steps: [
        { t: 'line', text: '' },
        { t: 'line', text: '── KAPELO · Часовня ──', cls: 'sys' },
        { t: 'wait', ms: 500 },
        { t: 'saySweet', text: 'Все сказали то, что хотели. Пора.' },
        { t: 'wait', ms: 700 },
        { t: 'choose',
          opts: [
            { label: '→ Пройти к финалу' }
          ],
          goto: ['finale']
        }
      ]
    },

    /* =====================================================
       ПОДСЦЕНА: РАЗГОВОР С АННОЙ
       ===================================================== */
    {
      id: 'talk_anna',
      steps: [
        { t: 'line', text: '' },
        { t: 'track', name: 'memory', fade: 2.5 },
        { t: 'saySweet', text: 'Анна смотрит на тебя. Долго.' },
        { t: 'wait', ms: 700 },

        { t: 'say', eo: 'Kion vi volas scii?', ru: 'Что ты хочешь знать?', speed: 40 },
        { t: 'wait', ms: 600 },

        { t: 'say', eo: 'Mi estis kiel vi.', ru: 'Я была как ты.', speed: 35 },
        { t: 'wait', ms: 500 },
        { t: 'say', eo: 'Mi venis, kiam la klubo fermis.', ru: 'Я пришла, когда клуб закрылся.', speed: 35 },
        { t: 'wait', ms: 600 },
        { t: 'say', eo: 'Kaj mi restis. Ĉar mi ne povis foriri.', ru: 'И я осталась. Потому что не могла уйти.', speed: 30 },
        { t: 'wait', ms: 700 },

        { t: 'say', eo: 'Sed vi povas. Vi havas tion, kion mi ne havis.', ru: 'Но ты можешь. У тебя есть то, чего не было у меня.', speed: 30 },
        { t: 'wait', ms: 500 },
        { t: 'say', eo: 'Vi havas esperon.', ru: 'У тебя есть надежда.', speed: 40 },
        { t: 'wait', ms: 800 },

        { t: 'say', eo: 'Ĉu vi promesos ion?', ru: 'Обещаешь кое-что?', speed: 40 },
        { t: 'wait', ms: 600 },

        { t: 'say', eo: 'Se vi foriros — memoru nin.', ru: 'Если ты уйдёшь — помни нас.', speed: 35 },
        { t: 'wait', ms: 700 },
        { t: 'line', text: 'Ты киваешь. Молча.' },
        { t: 'wait', ms: 600 },

        { t: 'saySweet', text: 'Анна смотрит в сторону Дарины. Долго.' },
        { t: 'wait', ms: 600 },
        { t: 'say', eo: 'Ŝi havis la plej belan rideton.', ru: 'У неё была самая красивая улыбка.', speed: 35 },
        { t: 'wait', ms: 500 },
        { t: 'say', eo: 'Ĝi savis min. Multajn fojojn.', ru: 'Она спасала меня. Много раз.', speed: 35 },
        { t: 'wait', ms: 700 },
        { t: 'smile', text: 'Ты вспоминаешь улыбку Дарины. Широкую. Красивую. Как будто солнце в комнате.' },
        { t: 'wait', ms: 800 },

        { t: 'say', eo: 'Se vi memoros ŝin — memoru ŝian rideton.', ru: 'Если будешь помнить её — помни её улыбку.', speed: 30 },
        { t: 'wait', ms: 900 },

        { t: 'setFlag', flag: 'talked_anna' },
        { t: 'unlockAch', ach: 'anna_known' },
        { t: 'choose', opts: [{ label: '← Вернуться к выбору' }], goto: ['chapel_after_router'] }
      ]
    },

    /* =====================================================
       ПОДСЦЕНА: РАЗГОВОР С ДАРИНОЙ И МАКСИМОМ
       ===================================================== */
    {
      id: 'talk_dm',
      steps: [
        { t: 'line', text: '' },
        { t: 'track', name: 'warm', fade: 2.5 },
        { t: 'saySweet', text: 'Дарина и Максим стоят рядом. Как всегда.' },
        { t: 'wait', ms: 700 },

        { t: 'say', eo: 'Ni ne volas, ke vi restu.', ru: 'Мы не хотим, чтобы ты остался.', speed: 35 },
        { t: 'wait', ms: 500 },
        { t: 'say', eo: 'Ni volas, ke vi foriru — sed memoru nin.', ru: 'Мы хотим, чтобы ты ушёл — но помнил нас.', speed: 30 },
        { t: 'wait', ms: 700 },

        { t: 'say', eo: 'Ni estis amikoj. Ĉiam.', ru: 'Мы были друзьями. Всегда.', speed: 40 },
        { t: 'wait', ms: 500 },
        { t: 'say', eo: 'Kaj se vi memoros — ni restos vivaj.', ru: 'И если ты будешь помнить — мы останемся живы.', speed: 30 },
        { t: 'wait', ms: 800 },

        { t: 'memory', label: 'Amikeco' },
        { t: 'word', word: 'memori', translation: 'помнить' },
        { t: 'wait', ms: 600 },

        { t: 'saySweet', text: 'Дарина подходит к тебе ближе.' },
        { t: 'wait', ms: 500 },
        { t: 'smile', text: 'И улыбается. Широко. Тепло. Так, как умеет только она.' },
        { t: 'wait', ms: 700 },
        { t: 'say', eo: 'La vortoj restas. Kaj la rideto restas.', ru: 'Слова остаются. И улыбка остаётся.', speed: 30 },
        { t: 'wait', ms: 600 },
        { t: 'say', eo: 'Eĉ kiam ni foriras.', ru: 'Даже когда мы уходим.', speed: 35 },
        { t: 'wait', ms: 900 },

        { t: 'say', eo: 'Iru al Anna. Ŝi atendas.', ru: 'Иди к Анне. Она ждёт.', speed: 40 },
        { t: 'wait', ms: 700 },

        { t: 'setFlag', flag: 'talked_dm' },
        { t: 'unlockAch', ach: 'darina_maxim' },
        { t: 'unlockAch', ach: 'darina_smile' },
        { t: 'choose', opts: [{ label: '← Вернуться к выбору' }], goto: ['chapel_after_router'] }
      ]
    },

    /* =====================================================
       ФИНАЛ: ПОСЛЕДНИЙ УРОК И ВЫБОР
       ===================================================== */
    {
      id: 'finale',
      steps: [
        { t: 'line', text: '' },
        { t: 'track', name: 'memory', fade: 3 },
        { t: 'line', text: '── LECIONO 18 · La Fino ──', cls: 'sys' },
        { t: 'wait', ms: 1000 },

        { t: 'saySweet', text: 'Анна открывает книгу на алтаре. На последней странице — пустое место.' },
        { t: 'wait', ms: 700 },
        { t: 'line', text: '«Здесь будет твоё имя», — говорит она.' },
        { t: 'wait', ms: 800 },

        { t: 'lesson', title: 'LECIONO 18 · La lasta leciono', subtitle: 'Последний урок' },

        { t: 'rule',
          text: 'Повелительное наклонение: -u. Это — для приказа, просьбы, совета.',
          ru: 'Venu! — Приди! Iru! — Иди! Restu! — Останься!'
        },
        { t: 'wait', ms: 500 },

        { t: 'examples', items: [
          { eo: 'Restu!', ru: 'Останься!' },
          { eo: 'Foriru!', ru: 'Уходи!' },
          { eo: 'Memoru!', ru: 'Помни!' },
          { eo: 'Ni iru kune.', ru: 'Пойдём вместе.' }
        ] },

        { t: 'exercise',
          kind: 'translate',
          q: 'Как сказать «Помни!»?',
          hint: 'memori + повелительное окончание -u.',
          answers: ['memoru'],
          onCorrect: 'Ĝuste.',
          onWrong: 'Ne tute. Memoru!',
          answer: 'Memoru!',
          answerRu: 'Помни!',
          word: 'memoru', translation: 'помни'
        },

        { t: 'exercise',
          kind: 'choose',
          q: 'Что значит «Restu!»?',
          opts: [
            { label: 'Уходи!', correct: false },
            { label: 'Останься!', correct: true },
            { label: 'Помни!', correct: false }
          ],
          onCorrect: 'Ĝuste. Restu — останься.',
          onWrong: 'Ne tute. Restu — останься.'
        },

        { t: 'wait', ms: 700 },
        { t: 'saySweet', text: 'Ты смотришь на книгу. На пустую страницу.' },
        { t: 'wait', ms: 600 },
        { t: 'saySweet', text: 'Теперь — твоя очередь выбрать.' },
        { t: 'wait', ms: 900 },

        { t: 'lessonDone', id: 'lesson18' },

        { t: 'say', eo: 'Ĉu vi restos, aŭ ĉu vi foriros?', ru: 'Ты останешься или уйдёшь?', speed: 35 },
        { t: 'wait', ms: 900 },

        { t: 'choose',
          opts: [
            { label: '✎ «Mi restos.» — Я останусь', cls: 'dark' },
            { label: '✎ «Mi foriros.» — Я уйду' },
            { label: '✎ «Mi memoros ilin.» — Я буду их помнить' },
            { label: '✎ «Mi fariĝos instruisto.» — Я стану учителем', cls: 'dark' }
          ],
          goto: ['end_stay', 'end_leave', 'end_memory', 'end_teacher']
        }
      ]
    },

    /* =====================================================
       КОНЦОВКА 1: «MI RESTOS»
       ===================================================== */
    {
      id: 'end_stay',
      steps: [
        { t: 'line', text: '' },
        { t: 'track', name: 'dread', fade: 3 },
        { t: 'line', text: '── Fino · Lernanto por ĉiam ──', cls: 'sys' },
        { t: 'wait', ms: 1200 },

        { t: 'saySweet', text: 'Ты пишешь. Медленно. Своим почерком.' },
        { t: 'wait', ms: 700 },
        { t: 'line', text: '«Mi restos.»' },
        { t: 'wait', ms: 900 },

        { t: 'line', text: 'Книга захлопывается сама. Свет свечей меркнет.' },
        { t: 'wait', ms: 700 },
        { t: 'saySweet', text: 'Анна улыбается. Печально. Понимающе.' },
        { t: 'wait', ms: 600 },
        { t: 'say', eo: 'Mi atendis vin.', ru: 'Я ждала тебя.', speed: 45 },
        { t: 'wait', ms: 600 },
        { t: 'say', eo: 'Ni atendos kune.', ru: 'Мы будем ждать вместе.', speed: 40 },
        { t: 'wait', ms: 900 },

        { t: 'saySweet', text: 'Двери запираются. Окна зарастают плющом.' },
        { t: 'wait', ms: 600 },
        { t: 'line', text: 'Ты становишься четырнадцатым. Потом пятнадцатым. Потом — никем.' },
        { t: 'wait', ms: 800 },

        { t: 'line', text: 'Но Анна рядом. И Дарина. И Максим.' },
        { t: 'wait', ms: 600 },
        { t: 'line', text: 'Уже не так одиноко.', cls: 'bad' },
        { t: 'wait', ms: 1200 },

        { t: 'saySweet', text: 'Однажды в дверь постучат. Молодой голос скажет: «Saluton».' },
        { t: 'wait', ms: 700 },
        { t: 'saySweet', text: 'И ты расскажешь ему то же, что рассказали тебе.' },
        { t: 'wait', ms: 1000 },

        { t: 'line', text: '«Saluton, lernanto dek-kvara.»', cls: 'bad' },
        { t: 'wait', ms: 1400 },

        { t: 'end', ending: 'lernanto' }
      ]
    },

    /* =====================================================
       КОНЦОВКА 2: «MI FORIROS»
       ===================================================== */
    {
      id: 'end_leave',
      steps: [
        { t: 'line', text: '' },
        { t: 'track', name: 'sad', fade: 3 },
        { t: 'line', text: '── Fino · Fuĝo ──', cls: 'sys' },
        { t: 'wait', ms: 1200 },

        { t: 'saySweet', text: 'Ты пишешь: «Mi foriros».' },
        { t: 'wait', ms: 700 },
        { t: 'line', text: 'Книга светится. Дверь на другом конце зала открывается.' },
        { t: 'wait', ms: 700 },

        { t: 'saySweet', text: 'Ты идёшь. Не оборачиваешься.' },
        { t: 'wait', ms: 800 },

        { t: 'say', eo: 'Anna...', ru: 'Анна...', speed: 60 },
        { t: 'wait', ms: 500 },
        { t: 'line', text: 'Ты слышишь, как она плачет.' },
        { t: 'wait', ms: 900 },

        { t: 'flash', strength: 0.8, color: 'white' },
        { t: 'wait', ms: 1200 },

        { t: 'line', text: 'Ты на улице. Утро. Холодное. Реальное.' },
        { t: 'wait', ms: 900 },
        { t: 'line', text: 'Ты не помнишь, что было внутри. Только ощущение потери.' },
        { t: 'wait', ms: 900 },

        { t: 'saySweet', text: 'Ты уходишь. И клуб закрывается за твоей спиной.' },
        { t: 'wait', ms: 1000 },

        { t: 'line', text: 'Ты выжил. Но забыл.' },
        { t: 'wait', ms: 1400 },

        { t: 'end', ending: 'fugo' }
      ]
    },

    /* =====================================================
       КОНЦОВКА 3: «MI MEMOROS ILIN»
       ===================================================== */
    {
      id: 'end_memory',
      steps: [
        { t: 'line', text: '' },
        { t: 'track', name: 'memory', fade: 3 },
        { t: 'line', text: '── Fino · Memoro ──', cls: 'sys' },
        { t: 'wait', ms: 1200 },

        { t: 'saySweet', text: 'Ты пишешь: «Mi memoros ilin».' },
        { t: 'wait', ms: 700 },
        { t: 'line', text: 'Книга открывается на первой странице. Все имена — как новые.' },
        { t: 'wait', ms: 700 },

        { t: 'saySweet', text: 'Ты выходишь. Двери клуба закрываются, но не запираются.' },
        { t: 'wait', ms: 700 },
        { t: 'saySweet', text: 'За твоей спиной слышен тихий смех. Дарина. Максим. Анна.' },
        { t: 'wait', ms: 800 },

        { t: 'line', text: 'Ты вернёшься. Может быть. Однажды.' },
        { t: 'wait', ms: 700 },
        { t: 'line', text: 'А пока — ты несёшь их с собой.' },
        { t: 'wait', ms: 900 },

        { t: 'say', eo: 'Ĉiam kune.', ru: 'Всегда вместе.', speed: 45 },
        { t: 'wait', ms: 800 },
        { t: 'saySweet', text: 'Ты повторяешь эту фразу всю дорогу домой.' },
        { t: 'wait', ms: 1000 },

        { t: 'line', text: 'И перед глазами — улыбка. Широкая. Красивая.', cls: 'smile' },
        { t: 'wait', ms: 800 },
        { t: 'line', text: 'Улыбка Дарины.' },
        { t: 'wait', ms: 1400 },

        { t: 'end', ending: 'memoro' }
      ]
    },

    /* =====================================================
       КОНЦОВКА 4: «MI FARIĜOS INSTRUISTO»
       ===================================================== */
    {
      id: 'end_teacher',
      steps: [
        { t: 'line', text: '' },
        { t: 'track', name: 'chaos', fade: 2 },
        { t: 'line', text: '── Fino · Instruisto ──', cls: 'sys' },
        { t: 'wait', ms: 1200 },

        { t: 'saySweet', text: 'Ты пишешь: «Mi fariĝos instruisto».' },
        { t: 'wait', ms: 700 },
        { t: 'line', text: 'Книга начинает кричать. Или плакать. Или смеяться — не разобрать.' },
        { t: 'wait', ms: 800 },

        { t: 'say', eo: 'Ne! Ne! Ne ekzistas instruisto!', ru: 'Нет! Нет! Учителя не существует!', speed: 50 },
        { t: 'wait', ms: 700 },
        { t: 'say', eo: 'Nur mi! Nur mi!', ru: 'Только я! Только я!', speed: 55 },
        { t: 'wait', ms: 900 },

        { t: 'silence', ms: 500 },
        { t: 'flash', strength: 0.8, color: 'red' },
        { t: 'hardShake', ms: 1200 },
        { t: 'scare', kind: 'face', opts: { intensity: 'hard', force: true } },
        { t: 'wait', ms: 1400 },

        { t: 'line', text: 'Ты просыпаешься. Один. В пустом клубе.' },
        { t: 'wait', ms: 800 },
        { t: 'line', text: 'Голосов больше нет. Только тишина.' },
        { t: 'wait', ms: 900 },

        { t: 'saySweet', text: 'Ты стоишь на месте Анны. У окна.' },
        { t: 'wait', ms: 600 },
        { t: 'line', text: 'Ты говоришь вслух то, что говорил Максим.' },
        { t: 'wait', ms: 700 },
        { t: 'say', eo: 'Saluton, lernanto.', ru: 'Привет, ученик.', speed: 45 },
        { t: 'wait', ms: 900 },

        { t: 'line', text: 'Кто-то входит. Ты улыбаешься.' },
        { t: 'wait', ms: 700 },
        { t: 'line', text: 'Круг замкнулся.' },
        { t: 'wait', ms: 1400 },

        { t: 'end', ending: 'instruisto' }
      ]
    }
  ]
};