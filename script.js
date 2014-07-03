define(['jquery'], function($)
{
    return new function()
    {
        var self = this;

        self.init = function()
        {
            $('.js-float-label').each(function()
            {
                var id = $(this).attr('id');
                var value;

                $(this).on('keyup', function() {
                    value = $(this).val();

                    if (value !== '')
                        $(this).siblings('.hidden-label').removeClass('hidden');
                    else
                        $(this).siblings('.hidden-label').addClass('hidden');
                });

                $(this).on('blur', function()
                {
                    value = $(this).val();

                    if (value !== '')
                        $(this).siblings('.hidden-label').addClass('hidden');
                });

                $(this).on('focus', function()
                {
                    value = $(this).val();

                    if (value !== '')
                        $(this).siblings('.hidden-label').removeClass('hidden');

                        // console.log(value);
                });
            });
        };
    }();
});