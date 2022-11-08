const loadScript = (url, callback) => { const script =
document.createElement('script'); script.src = url;
document.body.append(script);

script.addEventListener('load', () => { return callback(script); });
script.addEventListener('error', () => { return callback(null, 'Error'); }); };
loadScript( 'https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js',

    (script, error) => {

        if (script) {

            console.log(`${script.src} завантажився успішно`);

            loadScript(

                'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js',

                (script, error) => {

          if (script) {
            console.log(`${script.src} завантажився успішно`);
              loadScript(

                  'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js',

                  (script, error) => {

                if (script) {
                  console.log(`${script.src} завантажився успішно`);
                } else {
                  console.log(error);
                }
              }
            );
          } else {
            console.log(error);
          }
        }
      );
    } else {
      console.log(error);
    }

} );

// const loadScript = url => { // const script =
document.createElement('script'); // script.src = url; //
document.body.append(script);

// return new Promise((resolve, rejected) => { //
script.addEventListener('load', () => { // resolve(script); // }); //
script.addEventListener('error', () => { // rejected('Error'); // }); // }); //
}; // loadScript('https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js') //
.then(script => { // console.log(`${script.src} завантажився успішно`); //
return loadScript( //
'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js' // ); // })
// .then(script => { // console.log(`${script.src} завантажився успішно`); //
return loadScript( //
'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js' // );
// }) // .then(script => { // console.log(`${script.src} завантажився успішно`);
// }) // .catch(error => { // console.log(error); // });
