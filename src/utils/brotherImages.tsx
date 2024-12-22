/* 
Used to dynamically import every brother's images located in public/img/__/__ 
*/

const brotherImages = async () => {
  const images: Record<string, string> = {};

  // Add new brother image filepaths to the list
  const files = [
    '/default.jpg',

    'am/kai.png',

    'annex/mchu.png',

    'ao/jack.png',
    'ao/jason.png',
    'ao/jun.png',
    'ao/liam.png',

    'ap/alex.png',
    'ap/chris.png',
    'ap/dan.jpg',
    'ap/jchang.png',
    'ap/junior.png',
    'ap/marcus.jpg',
    'ap/pranav.png',

    'aphi/adriano.png',
    'aphi/gabe.png',
    'aphi/kych.png',
    'aphi/thomasn.png',
    'aphi/vail.png',
    'aphi/vinny.png',

    'ar/han.jpg',
    'ar/jguo.png',
    'ar/JJ_2.jpg',
    'ar/jj.png',
    'ar/kinllen.png',
    'ar/luis.png',
    'ar/min.png',
    'ar/tony.png',

    'as/Andrew_2.png',
    'as/andrew.jpg',
    'as/chapadia.jpg',
    'as/Derrick_2.png',
    'as/derrick.jpg',
    'as/ivan.jpg',
    'as/ken.jpg',
    'as/will.jpg',
    'as/wonjae.jpg',

    'at/AL_1.png',
    'at/gamboa.jpg',
    'at/james.png',
    'at/khoa.png',
    'at/khoa2.png',
    'at/levi.jpg',
    'at/max.png',
    'at/oli2.jpg',
    'at/oliver.png',
    'at/tuo.jpg',

    'au/jaydon.jpg',
    'au/richard.jpg',
    'au/richard2.jpg',

    'axi/alau.png',
    'axi/alau2.png',
    'axi/derek.png',
    'axi/ethan.png',
    'axi/jared.png',
    'axi/marvin.png',
    'axi/thomas.png',
  ];

  for (const file of files) {
    images[file.replace(/\.(png|jpe?g)$/, '')] = `/img/${file}`;
  }

  return images;
};

export default brotherImages;
