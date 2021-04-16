/**
 * PHP Email Form Validation - v2.3
 * URL: https://bootstrapmade.com/php-email-form/
 * Author: BootstrapMade.com
 */
!(function ($) {
    "use strict";

    $('form.php-email-form').submit(function (e) {
        e.preventDefault();
        //
        // //  Preparing Data
        // var payload = {}
        //
        // var f = $(this).find('.form-group'),
        //     ferror = false,
        //     emailExp = /^[^\s()<>@,;:\/]+@\w[\w\.-]+\.[a-z]{2,}$/i;
        //
        // f.children('input').each(function () { // run all inputs
        //
        //     var i = $(this); // current input
        //
        //     var rule = i.attr('data-rule');
        //
        //     if (rule !== undefined) {
        //         var ierror = false; // error flag for current input
        //         var pos = rule.indexOf(':', 0);
        //         if (pos >= 0) {
        //             var exp = rule.substr(pos + 1, rule.length);
        //             rule = rule.substr(0, pos);
        //         } else {
        //             rule = rule.substr(pos + 1, rule.length);
        //         }
        //
        //         switch (rule) {
        //             case 'required':
        //                 if (i.val() === '') {
        //                     ferror = ierror = true;
        //                 }
        //                 break;
        //
        //             case 'minlen':
        //                 if (i.val().length < parseInt(exp)) {
        //                     ferror = ierror = true;
        //                 }
        //                 break;
        //
        //             case 'email':
        //                 if (!emailExp.test(i.val())) {
        //                     ferror = ierror = true;
        //                 }
        //                 break;
        //
        //             case 'checked':
        //                 if (!i.is(':checked')) {
        //                     ferror = ierror = true;
        //                 }
        //                 break;
        //
        //             case 'regexp':
        //                 exp = new RegExp(exp);
        //                 if (!exp.test(i.val())) {
        //                     ferror = ierror = true;
        //                 }
        //                 break;
        //         }
        //         i.next('.validate').html((ierror ? (i.attr('data-msg') !== undefined ? i.attr('data-msg') : 'wrong Input') : '')).show('blind');
        //
        //         payload[i.attr('name')] = i.val();
        //     }
        // });
        // f.children('textarea').each(function () { // run all inputs
        //
        //     var i = $(this); // current input
        //     var rule = i.attr('data-rule');
        //
        //     if (rule !== undefined) {
        //         var ierror = false; // error flag for current input
        //         var pos = rule.indexOf(':', 0);
        //         if (pos >= 0) {
        //             var exp = rule.substr(pos + 1, rule.length);
        //             rule = rule.substr(0, pos);
        //         } else {
        //             rule = rule.substr(pos + 1, rule.length);
        //         }
        //
        //         switch (rule) {
        //             case 'required':
        //                 if (i.val() === '') {
        //                     ferror = ierror = true;
        //                 }
        //                 break;
        //
        //             case 'minlen':
        //                 if (i.val().length < parseInt(exp)) {
        //                     ferror = ierror = true;
        //                 }
        //                 break;
        //         }
        //         i.next('.validate').html((ierror ? (i.attr('data-msg') != undefined ? i.attr('data-msg') : 'wrong Input') : '')).show('blind');
        //         payload[i.attr('name')] = i.val();
        //     }
        // });
        //
        // if (ferror) return false;
        //
        // var this_form = $(this);
        // var action = $(this).attr('action');
        //
        // if (!action) {
        //     this_form.find('.loading').slideUp();
        //     this_form.find('.error-message').slideDown().html('The form action property is not set!');
        //     return false;
        // }
        //
        // this_form.find('.sent-message').slideUp();
        // this_form.find('.error-message').slideUp();
        // this_form.find('.loading').slideDown();

        sendEmailViaJs()

        return true;
    });

    function sendEmailViaJs() {
        $.ajax({
            type: "POST",
            url: "https://mandrillapp.com/api/1.0/messages/send.json",
            data: {
                "key": "09BfYHYpBOQYoQi8DhNIwQ",
                "message": {
                    "from_email": "naythukhant644@gmail.com",
                    "to": [
                        {
                            "email": "naythukhant644@gmail.com",
                            "name": "RECIPIENT NAME (OPTIONAL)",
                            "type": "to"
                        },
                    ],
                    "autotext": "true",
                    "subject": "YOURSUBJECTHERE!",
                }
            }
        }).done(function (response) {
            console.log(response); // if you're into that sorta thing
        });
    }
})(jQuery);
