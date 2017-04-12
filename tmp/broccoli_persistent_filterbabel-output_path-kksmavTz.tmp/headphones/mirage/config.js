define('headphones/mirage/config', ['exports'], function (exports) {
  exports['default'] = function () {

    // These comments are here to help you get started. Feel free to delete them.

    /*
      Config (with defaults).
       Note: these only affect routes defined *after* them!
    */

    // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
    // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
    // this.timing = 400;      // delay for each request, automatically set to 0 during testing

    /*
      Shorthand cheatsheet:
       this.get('/posts');
      this.post('/posts');
      this.get('/posts/:id');
      this.put('/posts/:id'); // or this.patch
      this.del('/posts/:id');
       http://www.ember-cli-mirage.com/docs/v0.2.x/shorthands/
    */
    this.namespace = '/api';
    var inear = [{
      id: 'reflect-mini',
      type: 'in-ear',
      attributes: {
        title: 'Reflect Mini',
        type: 'in-ear',
        rate: 'Rs.1990/-',
        image: 'http://static.jbl.com/system/html/JBL-ReflectMini-HeroShot-GreySportCap-80fd4380.png',
        description: "Lightweight, in-ear sports headphones"
      }
    }, {
      id: 't280a',
      type: 'in-ear',
      attributes: {
        title: 'T-280 A',
        type: 'in-ear',
        rate: 'Rs.2990/-',
        image: 'http://static.jbl.com/system/html/JBL_T280A_Gold_Detail3-fa517105.png',
        description: "Engineered with PureBass for rib rattling rhythms, users will also appreciate the use of high quality materials like sturdy aluminum on the housings, silicone ear tips and the tangle resistant flat cable. Add the single button mic and remote feature for outstanding call clarity and powerful 9mm drivers for a balanced sonic output and it’s obvious the JBL T280A’s are the epitome of in-ear awesomeness. And since style and sound are nearly synonymous, the JBL T280As come in black, silver and gold and feature the JBL logos intricately laser etched on the ear pieces."
      }
    }, {
      id: 't100a',
      type: 'in-ear',
      attributes: {
        title: 'T-100 A',
        type: 'in-ear',
        rate: 'Rs.999/-',
        image: 'http://static.jbl.com/system/html/T100A-BLACK_angled-b8d8d5cc.png',
        description: "The T100’s 8mm drivers generate high sensitivity, extended frequency response and PureBass Performance that is deep, powerful and accurate. So you hear the truth from your favorite music. And because we know headphones, like the music they deliver, are an extension of your personal style, JBL T100A’s come available in white, black or red and come with a durable cord for stress-free sound enjoyment. In addition, there’s an in-line microphone that lets you take calls without taking the headphones off."
      }
    }, {
      id: 'synchros-reflect-bt',
      type: 'in-ear',
      attributes: {
        title: 'Synchros Reflect BT',
        type: 'in-ear',
        rate: 'Rs.5990/-',
        image: 'http://static.jbl.com/system/html/Reflect_Blk-35d7b0bf.png',
        description: "You know where you’re going. You now have a partner to help get you there. Quality sound combines with a secure fit, providing peace-of-mind that can define the difference between merely working out and pushing the limit. With 5 hours of Bluetooth®-enabled wireless connectivity and JBL-quality sound, you can dig deep and push that much harder. Its distinctive, reflective-colored cord lights the way for night visibility, and its unique tether design allows customizable fits. Their sweat-proof, ready-for-anything, rugged design delivers on JBL’s legendary sound – with no-compromise – moving you forward in more ways than one."
      }
    }, {
      id: 'synchros-reflect-a',
      type: 'in-ear',
      attributes: {
        title: 'Synchros Reflect A Sport',
        type: 'in-ear',
        rate: 'Rs.3990/-',
        image: 'http://static.jbl.com/system/html/Synchros-reflect-Black-e5eba4ee.png',
        description: "Your ultimate workout partner.You know where you’re going. You now have a partner to help get you there. Quality sound combines with a secure fit, providing peace-of-mind that can define the difference between merely working out and pushing the limit. Its distinctive, reflective-colored cord lights the way for night visibility. With customizable cable lengths, it’s never been easier to stay plugged in the zone. Their sweat-proof, ready-for-anything, rugged design delivers on JBL’s legendary sound – with no-compromise – moving you forward in more ways than one."
      }
    }, {
      id: 'synchros-e10',
      type: 'in-ear',
      attributes: {
        title: 'Synchros E-10',
        type: 'in-ear',
        rate: 'Rs.2999/-',
        image: 'http://static.jbl.com/system/html/E10_Black-28a2817c.png',
        description: "JBL fully realizes the need for quality sound, having designed this bold, new profile for today’s on-the-go lifestyle. JBL Synchros E10 in-ear headphones are a tablet/smartphone-friendly solution opening the door to full-spectrum, JBL-quality sound thanks to PureBass performance and 8mm drivers. From essential features including a secure, comfortable fit, lightweight design, advanced styling – in a variety of colors to choose from ¬– to their handy, inline, one-button remote/mic and widened frequency range, you’ll enjoy more performance than you might ever expect. The added touch of including a lightweight carrying case, to safely transport your E10s, underlines their portability. Why deny yourself the best sound possible when there’s an affordable, in-ear headphone that speaks so highly of your good taste?"
      }
    }, {
      id: 'synchros-s200a',
      type: 'in-ear',
      attributes: {
        title: 'Synchros S-200 A',
        type: 'in-ear',
        rate: 'Rs.4990/-',
        image: 'http://static.jbl.com/system/html/S200iblk_001_V2_dv1605x1605-d8be3568.png',
        description: "Whether it’s discovering a shortcut that gets you to work faster, or masterminding the perfect schedule to manage your day – these days it seems the easier you can fit one part of your life into another, the better. That’s where the new J46BT Bluetooth® wireless in-ear stereo headphone comes into play. Combining signature, in-ear JBL sound with the freedom of Bluetooth® 4.0 compatibility, you get a discrete, portable headphone that doubles as a wireless headset for managing phone calls in a flash. The J46BT comes with a 3-button remote control that lets you start, stop, and adjust the volume of your music easily and comfortably, as well as answer or end your calls hassle-free. It’s a perfect match for those who want on the go headphones that play for hours without any hunting around for a power outlet: your J46BT comes with a USB-rechargeable battery that plays up to 5 hours of music without pause. And with the added comfort of angled sound nozzles, stabilizing sports cushions (S, L) and silicone ear tips in three different sizes (S, M, L) to give you the fit you need, you’ve got yourself JBL quality, Bluetooth® liberty, and all-around top value."
      }
    }, {
      id: 'j46bt',
      type: 'in-ear',
      attributes: {
        title: 'J46BT',
        type: 'in-ear',
        rate: 'Rs.5990/-',
        image: 'http://static.jbl.com/system/html/J46BTBLK_001_dv1605x1605-0bef07e7.png',
        description: "If it sounds like the future – it sounds like JBL. Out with the old and in with the new: introducing the JBL Synchros S200 A in-ear stereo headphones. Precision-designed, die-cast aluminum earpieces with metal accents ensure these headphones stand out from the pack. Angled eartips allow for a comfortable, stable fit for hours of listening enjoyment. Modeled after the same JBL sound systems used in the world’s most prestigious clubs, the S200 A delivers a balanced pro-audio experience with amazing clarity and deep, resonant bass."
      }
    }];

    var onear = [{
      id: '1',
      type: 'On-ear',
      attributes: {
        title: 'Synchros E-40 BT',
        type: 'On-ear',
        rate: 'Rs.8990/-',
        image: 'http://static.jbl.com/system/html/E40-red-156b3ef8.png',
        description: "The new E40BT takes JBLs legendary signature sound, adds advanced Bluetooth and mobile features, and packages it all in a sleek design that’s both comfortable and head-turning. JBL’s engineers have combined generous 40mm drivers withPureBass performance, treating your earsto expansive frequency response (20 hz to 20 KHz) with full, undistorted bass. Bluetooth technology allows wireless connectivity with phones, tablets and music players, Built-in ShareMe™ technology lets you to stream music wirelessly to another ShareMe-equipped headphone.A built-in rechargeable Li-ion battery gives 16 hours play time, and when the battery is flat, use the included aux cable for continued, uninterrupted listening. Beyond great sound, the E40BT is designed for comfort, style, and durability. The Ergonomic headband and 360-degree swivel hinges allowfor a personalized fit and long-lasting comfort. The butter-soft, leatherette ear cups cradle your ears for all-day comfort and work to seal out distracting ambient sound. The E40BT’s sleek design and five unique color combinations make a visual statement that’s as striking as its sound."
      }
    }, {
      id: '2',
      type: 'On-ear',
      attributes: {
        title: 'Synchros S-300 A',
        type: 'On-ear',
        rate: 'Rs.7990/-',
        image: 'http://static.jbl.com/system/html/S300WHT_001-0c209118.png',
        description: "The JBL Synchros S300 is a tough act to follow when it comes to precision listening. With its portable, conveniently collapsible steel headband design, leather earcushions, the S300 goes above and beyond in craftsmanship both inside and out. Available in 6 different color combinations, it not only feels good and looks good, it brings you all the sonic power, richness, and depth of JBL PureBass performance."
      }
    }, {
      id: '3',
      type: 'On-ear',
      attributes: {
        title: 'J-56 BT',
        type: 'On-ear',
        rate: 'Rs.9990/-',
        image: 'http://static.jbl.com/system/html/J56-black-side-b1ccd771.png',
        description: "For those who can’t go more than a few hours without being on the go –the new JBL JB56BT Bluetooth® on-ear stereo headphones are the perfect companion. Featuring dynamic, pivoting earcups, along with 40mm advanced drivers that hit home deep with signature JBL PureBass listening, they're every inch a high-performance headphone, the kind you’d expect from the world champion in sound engineering. But that’s just scratching the surface. With one press of a button, the JB56BT switches instantly into a Bluetooth® 3.0 headset with echo-cancelling circuitry. Now you can talk wirelessly with your friends and family with the same sound precision you’d find in a best-in-class headphone. With added features like a USB-rechargeable battery with 16 hr life, the JB56BT is custom-designed to go above and beyond your expectations – both in sound and in freedom."
      }
    }, {
      id: '4',
      type: 'On-ear',
      attributes: {
        title: 'T-300 A',
        type: 'On-ear',
        rate: 'Rs.2999/-',
        image: 'http://static.jbl.com/system/html/T300A-white-blue-angle-c4f439c5.png',
        description: "The T300A’s 40mm drivers generate high sensitivity, extended frequency response and PureBass Performance that is deep, powerful and accurate. So you hear the truth from your favorite music. And because we know headphones are an extension of your personal style, JBL T300A’s come in a variety of colors and are equipped with a durable cord for stress-free sound enjoyment. Along with the adjustable, padded headband and padded ear cups, there’s an in-line microphone that lets you conveniently take calls from any smartphone without taking the headphones off."
      }
    }, {
      id: '5',
      type: 'On-ear',
      attributes: {
        title: 'J88',
        type: 'On-ear',
        rate: 'Rs.5490/-',
        image: 'http://static.jbl.com/system/html/J88Org_Amzn_001_dv1605x1605-da1218b9.png',
        description: "JBL drivers deliver precise, powerful sound for an exceptional listening experience. Bass is pure, deep and accurately produced – the calling card of legendary JBL sound. As a result, J88 headphones outperform competitive products costing much more. From the brushed stainless steel headband and ear-cup accents to the matte black or white housings, from the embossed, metallic JBL logos to the cable that matches the ear pads, these headphones are designed to be as pleasing to the eyes as they are to the ears."
      }
    }];

    var headsets = [{
      id: 'reflect-mini',
      type: 'in-ear',
      attributes: {
        title: 'Reflect Mini',
        type: 'in-ear',
        rate: 'Rs.1990/-',
        image: 'http://static.jbl.com/system/html/JBL-ReflectMini-HeroShot-GreySportCap-80fd4380.png',
        description: "Lightweight, in-ear sports headphones"
      }
    }, {
      id: 't280a',
      type: 'in-ear',
      attributes: {
        title: 'T-280 A',
        type: 'in-ear',
        rate: 'Rs.2990/-',
        image: 'http://static.jbl.com/system/html/JBL_T280A_Gold_Detail3-fa517105.png',
        description: "Engineered with PureBass for rib rattling rhythms, users will also appreciate the use of high quality materials like sturdy aluminum on the housings, silicone ear tips and the tangle resistant flat cable. Add the single button mic and remote feature for outstanding call clarity and powerful 9mm drivers for a balanced sonic output and it’s obvious the JBL T280A’s are the epitome of in-ear awesomeness. And since style and sound are nearly synonymous, the JBL T280As come in black, silver and gold and feature the JBL logos intricately laser etched on the ear pieces."
      }
    }, {
      id: 't100a',
      type: 'in-ear',
      attributes: {
        title: 'T-100 A',
        type: 'in-ear',
        rate: 'Rs.999/-',
        image: 'http://static.jbl.com/system/html/T100A-BLACK_angled-b8d8d5cc.png',
        description: "The T100’s 8mm drivers generate high sensitivity, extended frequency response and PureBass Performance that is deep, powerful and accurate. So you hear the truth from your favorite music. And because we know headphones, like the music they deliver, are an extension of your personal style, JBL T100A’s come available in white, black or red and come with a durable cord for stress-free sound enjoyment. In addition, there’s an in-line microphone that lets you take calls without taking the headphones off."
      }
    }, {
      id: 'synchros-reflect-bt',
      type: 'in-ear',
      attributes: {
        title: 'Synchros Reflect BT',
        type: 'in-ear',
        rate: 'Rs.5990/-',
        image: 'http://static.jbl.com/system/html/Reflect_Blk-35d7b0bf.png',
        description: "You know where you’re going. You now have a partner to help get you there. Quality sound combines with a secure fit, providing peace-of-mind that can define the difference between merely working out and pushing the limit. With 5 hours of Bluetooth®-enabled wireless connectivity and JBL-quality sound, you can dig deep and push that much harder. Its distinctive, reflective-colored cord lights the way for night visibility, and its unique tether design allows customizable fits. Their sweat-proof, ready-for-anything, rugged design delivers on JBL’s legendary sound – with no-compromise – moving you forward in more ways than one."
      }
    }, {
      id: 'synchros-reflect-a',
      type: 'in-ear',
      attributes: {
        title: 'Synchros Reflect A Sport',
        type: 'in-ear',
        rate: 'Rs.3990/-',
        image: 'http://static.jbl.com/system/html/Synchros-reflect-Black-e5eba4ee.png',
        description: "Your ultimate workout partner.You know where you’re going. You now have a partner to help get you there. Quality sound combines with a secure fit, providing peace-of-mind that can define the difference between merely working out and pushing the limit. Its distinctive, reflective-colored cord lights the way for night visibility. With customizable cable lengths, it’s never been easier to stay plugged in the zone. Their sweat-proof, ready-for-anything, rugged design delivers on JBL’s legendary sound – with no-compromise – moving you forward in more ways than one."
      }
    }, {
      id: 'synchros-e10',
      type: 'in-ear',
      attributes: {
        title: 'Synchros E-10',
        type: 'in-ear',
        rate: 'Rs.2999/-',
        image: 'http://static.jbl.com/system/html/E10_Black-28a2817c.png',
        description: "JBL fully realizes the need for quality sound, having designed this bold, new profile for today’s on-the-go lifestyle. JBL Synchros E10 in-ear headphones are a tablet/smartphone-friendly solution opening the door to full-spectrum, JBL-quality sound thanks to PureBass performance and 8mm drivers. From essential features including a secure, comfortable fit, lightweight design, advanced styling – in a variety of colors to choose from ¬– to their handy, inline, one-button remote/mic and widened frequency range, you’ll enjoy more performance than you might ever expect. The added touch of including a lightweight carrying case, to safely transport your E10s, underlines their portability. Why deny yourself the best sound possible when there’s an affordable, in-ear headphone that speaks so highly of your good taste?"
      }
    }, {
      id: 'synchros-s200a',
      type: 'in-ear',
      attributes: {
        title: 'Synchros S-200 A',
        type: 'in-ear',
        rate: 'Rs.4990/-',
        image: 'http://static.jbl.com/system/html/S200iblk_001_V2_dv1605x1605-d8be3568.png',
        description: "Whether it’s discovering a shortcut that gets you to work faster, or masterminding the perfect schedule to manage your day – these days it seems the easier you can fit one part of your life into another, the better. That’s where the new J46BT Bluetooth® wireless in-ear stereo headphone comes into play. Combining signature, in-ear JBL sound with the freedom of Bluetooth® 4.0 compatibility, you get a discrete, portable headphone that doubles as a wireless headset for managing phone calls in a flash. The J46BT comes with a 3-button remote control that lets you start, stop, and adjust the volume of your music easily and comfortably, as well as answer or end your calls hassle-free. It’s a perfect match for those who want on the go headphones that play for hours without any hunting around for a power outlet: your J46BT comes with a USB-rechargeable battery that plays up to 5 hours of music without pause. And with the added comfort of angled sound nozzles, stabilizing sports cushions (S, L) and silicone ear tips in three different sizes (S, M, L) to give you the fit you need, you’ve got yourself JBL quality, Bluetooth® liberty, and all-around top value."
      }
    }, {
      id: 'j46bt',
      type: 'in-ear',
      attributes: {
        title: 'J46BT',
        type: 'in-ear',
        rate: 'Rs.5990/-',
        image: 'http://static.jbl.com/system/html/J46BTBLK_001_dv1605x1605-0bef07e7.png',
        description: "If it sounds like the future – it sounds like JBL. Out with the old and in with the new: introducing the JBL Synchros S200 A in-ear stereo headphones. Precision-designed, die-cast aluminum earpieces with metal accents ensure these headphones stand out from the pack. Angled eartips allow for a comfortable, stable fit for hours of listening enjoyment. Modeled after the same JBL sound systems used in the world’s most prestigious clubs, the S200 A delivers a balanced pro-audio experience with amazing clarity and deep, resonant bass."
      }
    }, {
      id: '1',
      type: 'On-ear',
      attributes: {
        title: 'Synchros E-40 BT',
        type: 'On-ear',
        rate: 'Rs.8990/-',
        image: 'http://static.jbl.com/system/html/E40-red-156b3ef8.png',
        description: "The new E40BT takes JBLs legendary signature sound, adds advanced Bluetooth and mobile features, and packages it all in a sleek design that’s both comfortable and head-turning. JBL’s engineers have combined generous 40mm drivers withPureBass performance, treating your earsto expansive frequency response (20 hz to 20 KHz) with full, undistorted bass. Bluetooth technology allows wireless connectivity with phones, tablets and music players, Built-in ShareMe™ technology lets you to stream music wirelessly to another ShareMe-equipped headphone.A built-in rechargeable Li-ion battery gives 16 hours play time, and when the battery is flat, use the included aux cable for continued, uninterrupted listening. Beyond great sound, the E40BT is designed for comfort, style, and durability. The Ergonomic headband and 360-degree swivel hinges allowfor a personalized fit and long-lasting comfort. The butter-soft, leatherette ear cups cradle your ears for all-day comfort and work to seal out distracting ambient sound. The E40BT’s sleek design and five unique color combinations make a visual statement that’s as striking as its sound."
      }
    }, {
      id: '2',
      type: 'On-ear',
      attributes: {
        title: 'Synchros S-300 A',
        type: 'On-ear',
        rate: 'Rs.7990/-',
        image: 'http://static.jbl.com/system/html/S300WHT_001-0c209118.png',
        description: "The JBL Synchros S300 is a tough act to follow when it comes to precision listening. With its portable, conveniently collapsible steel headband design, leather earcushions, the S300 goes above and beyond in craftsmanship both inside and out. Available in 6 different color combinations, it not only feels good and looks good, it brings you all the sonic power, richness, and depth of JBL PureBass performance."
      }
    }, {
      id: '3',
      type: 'On-ear',
      attributes: {
        title: 'J-56 BT',
        type: 'On-ear',
        rate: 'Rs.9990/-',
        image: 'http://static.jbl.com/system/html/J56-black-side-b1ccd771.png',
        description: "For those who can’t go more than a few hours without being on the go –the new JBL JB56BT Bluetooth® on-ear stereo headphones are the perfect companion. Featuring dynamic, pivoting earcups, along with 40mm advanced drivers that hit home deep with signature JBL PureBass listening, they're every inch a high-performance headphone, the kind you’d expect from the world champion in sound engineering. But that’s just scratching the surface. With one press of a button, the JB56BT switches instantly into a Bluetooth® 3.0 headset with echo-cancelling circuitry. Now you can talk wirelessly with your friends and family with the same sound precision you’d find in a best-in-class headphone. With added features like a USB-rechargeable battery with 16 hr life, the JB56BT is custom-designed to go above and beyond your expectations – both in sound and in freedom."
      }
    }, {
      id: '4',
      type: 'On-ear',
      attributes: {
        title: 'T-300 A',
        type: 'On-ear',
        rate: 'Rs.2999/-',
        image: 'http://static.jbl.com/system/html/T300A-white-blue-angle-c4f439c5.png',
        description: "The T300A’s 40mm drivers generate high sensitivity, extended frequency response and PureBass Performance that is deep, powerful and accurate. So you hear the truth from your favorite music. And because we know headphones are an extension of your personal style, JBL T300A’s come in a variety of colors and are equipped with a durable cord for stress-free sound enjoyment. Along with the adjustable, padded headband and padded ear cups, there’s an in-line microphone that lets you conveniently take calls from any smartphone without taking the headphones off."
      }
    }, {
      id: '5',
      type: 'On-ear',
      attributes: {
        title: 'J88',
        type: 'On-ear',
        rate: 'Rs.5490/-',
        image: 'http://static.jbl.com/system/html/J88Org_Amzn_001_dv1605x1605-da1218b9.png',
        description: "JBL drivers deliver precise, powerful sound for an exceptional listening experience. Bass is pure, deep and accurately produced – the calling card of legendary JBL sound. As a result, J88 headphones outperform competitive products costing much more. From the brushed stainless steel headband and ear-cup accents to the matte black or white housings, from the embossed, metallic JBL logos to the cable that matches the ear pads, these headphones are designed to be as pleasing to the eyes as they are to the ears."
      }
    }];
    this.put('/feedbacks', function (db, request) {
      var attrs = JSON.parse(request.requestBody).feedback;
      var record = db.feedback.insert(attrs);
      return {
        feedback: record
      };
    });
    this.get('/in-ears', function () {
      return { data: inear };
    });
    this.get('/in-ears/:id', function (db, request) {
      return { data: inear.find(function (inear) {
          return request.params.id === inear.id;
        }) };
    });
    this.get('/on-ears', function () {
      return { data: onear };
    });
    this.get('/on-ears/:id', function (db, request) {
      return { data: onear.find(function (onear) {
          return request.params.id === onear.id;
        }) };
    });
    this.get('/headsets', function (db, request) {
      if (request.queryParams.title !== undefined) {
        var filtered = headsets.filter(function (i) {
          return i.attributes.title.toLowerCase().indexOf(request.queryParams.title.toLowerCase()) !== -1;
        });
        return { data: filtered };
      } else {
        return { data: headsets };
      }
    });
    this.get('/headsets/:id', function (db, request) {
      return { data: headsets.find(function (headsets) {
          return request.params.id === headsets.id;
        }) };
    });
  };
});