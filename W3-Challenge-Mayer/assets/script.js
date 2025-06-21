
        $(document).ready(function () {
            $('#toggleButton').click(function() {
              const $moreContent = $('#moreContent'); // Cache the jQuery object for efficiency
              const $thisButton = $(this); // Cache the button object

              // Use a callback function with slideToggle()
               $moreContent.slideToggle(function() {
                  // This function runs *after* the slideToggle animation is complete
                  if ($moreContent.is(':visible')) {
                        // If it IS visible now (meaning it just finished showing)
                      $thisButton.text('Show Less');
                  } 
                  else {
                  // If it is NOT visible now (meaning it just finished hiding)
                      $thisButton.text('Read More');
                  }
               });
            });

            $(function() {
              // Initialize Accordion
               $("#accordion").accordion(
                {
                  collapsible: true,
                  active: false
                }
               );
            });
          });
 