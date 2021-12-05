export default function poetry(verse) {
    let result = null;
    let answerVerse = '';
    let lastCharVerse = verse.charAt(verse.length - 1);
    switch (lastCharVerse) {
        case 'آ':
        case 'ا':
            answerVerse = "از آن، زمانه بما ایستادگی آموخت  که تا ز پای نیفتیم، تا که پا و سریست";
            break;
        case 'ب':
            answerVerse = "بنفشه مژدهٔ نوروز میدهد ما را  شکوفه را ز خزان وز مهرگان خبریست";
            break;
        case 'خ':
            answerVerse = "خوش است اگر گل امروز خوش بود فردا  ولی میان ز شب تا سحر گهان اگریست";
            break;
        case 'ی':
            answerVerse = "یکی نظر به گل افکند و دیگری بگیاه  ز خوب و زشت چه منظور؟ هر که را نظریست";
            break;
        case 'ن':
            answerVerse = "نه هر نسیم که اینجاست بر تو میگذرد  صبا صباست، به هر سبزه و گلش گذریست";
            break;
        case 'ز':
            answerVerse = "ز آب چشمه و باران نمی‌شود خاموش که آتشی که در اینجاست آتش جگریست";
            break;
        case 'ه':
            answerVerse = "هنر نمای نبودم بدین هنرمندی  سخن حدیث دگر، کار قصه دگریست";
            break;
        case 'ج':
            answerVerse = "جواب داد که من نیز صاحب هنرم  درین صحیفه ز من نیز نقشی و اثریست";
            break;
        case 'ع':
            answerVerse = "علامت خطر است این قبای خون آلود  هر آنکه در ره هستی است در ره خطریست";
            break;
        case 'ف':
            answerVerse = "فرصت از دست میرود، هشدار  عمر چون کاروان بی جرسی است";
            break;
        default:
            answerVerse = "متاسفانه بیت مناسب پیدا نگردید.";
    }
    result = answerVerse;
    console.log(result);
    return result;
}

//example
verse = 'به ماه دی، گلستان گفت با برف که ما را چند حیران میگذاری';
poetry(verse);
verse = 'بدامان گلستانی شبانگاه  چنین میکرد بلبل راز با ماه';
poetry(verse);
verse = 'بریخت خون من و نوبت تو نیز رسد  بدست رهزن گیتی هماره نیشتریست';
poetry(verse);