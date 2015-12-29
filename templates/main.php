<?php
script('recipe', 'vendor/underscore/underscore-min');
script('recipe', 'vendor/backbone/backbone');
script('recipe', 'vendor/backbone.marionette/lib/backbone.marionette.min');
script('recipe', 'vendor/curl/src/curl');
script('recipe', 'config');
style('recipe', 'style');
?>

<div id="app">
    <div id="app-navigation">
	<?php print_unescaped($this->inc('part.navigation')); ?>
	<?php print_unescaped($this->inc('part.settings')); ?>
    </div>

    <div id="app-content">
	<div id="app-content-wrapper">
	    <?php print_unescaped($this->inc('part.content')); ?>
	</div>
    </div>
</div>
