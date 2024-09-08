<?php

namespace App\Nova\Cards;

use Laravel\Nova\Card;

class CreateProfileButtonCard extends Card
{
    /**
     * The width of the card (1/3, 1/2, or full).
     *
     * @var string
     */
    public $width = 'full';

    /**
     * Get the component name for the card.
     *
     * @return string
     */
    public function component()
    {
        return 'create-profile-button-card';
    }
}
