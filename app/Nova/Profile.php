<?php

namespace App\Nova;

use Illuminate\Http\Request;
use Laravel\Nova\Fields\Boolean;
use Laravel\Nova\Fields\ID;
use Laravel\Nova\Http\Requests\NovaRequest;
use Laravel\Nova\Fields\Text;
use Laravel\Nova\Fields\Email;
use Laravel\Nova\Fields\Password;
use Laravel\Nova\Fields\Date;


class Profile extends Resource
{
    /**
     * The model the resource corresponds to.
     *
     * @var class-string<\App\Models\Profile>
     */
    public static $model = \App\Models\Profile::class;

    /**
     * The single value that should be used to represent the resource when being displayed.
     *
     * @var string
     */
    public static $title = 'id';

    /**
     * The columns that should be searched.
     *
     * @var array
     */
    public static $search = [
        'id',
    ];

    /**
     * Get the fields displayed by the resource.
     *
     * @param  \Laravel\Nova\Http\Requests\NovaRequest  $request
     * @return array
     */
    public function fields(NovaRequest $request)
    {
        return [
            ID::make()->sortable(),

            Text::make('Name')
                ->sortable()
                ->rules('required', 'max:255'),

            Email::make('Email')
                ->sortable()
                ->rules('required', 'email', 'max:255')
                ->creationRules('unique:profiles,email')
                ->updateRules('unique:profiles,email,{{resourceId}}'),

            Text::make('Phone')
                ->sortable()
                ->rules('nullable', 'max:20'),

            Text::make('Username')
                ->sortable()
                ->rules('required', 'max:255')
                ->creationRules('unique:profiles,username')
                ->updateRules('unique:profiles,username,{{resourceId}}'),

            Password::make('Password')
                ->onlyOnForms() // This will only show on forms and not on index/detail pages
                ->creationRules('required', 'string', 'min:8'),

            Date::make('Date of Birth', 'dob')
                ->sortable()
                ->rules('nullable', 'date'),

            Text::make('Gender')
                ->sortable()
                ->rules('nullable', 'max:255'),

            Text::make('Address')
                ->sortable()
                ->rules('nullable', 'max:255'),

            Text::make('Language')
                ->sortable()
                ->rules('nullable', 'max:255'),
        ];
    }

    /**
     * Get the cards available for the request.
     *
     * @param  \Laravel\Nova\Http\Requests\NovaRequest  $request
     * @return array
     */
    public function cards(NovaRequest $request)
    {
        return [
            new \App\Nova\Cards\CreateProfileButtonCard(),
        ];
    }

    /**
     * Get the filters available for the resource.
     *
     * @param  \Laravel\Nova\Http\Requests\NovaRequest  $request
     * @return array
     */
    public function filters(NovaRequest $request)
    {
        return [];
    }

    /**
     * Get the lenses available for the resource.
     *
     * @param  \Laravel\Nova\Http\Requests\NovaRequest  $request
     * @return array
     */
    public function lenses(NovaRequest $request)
    {
        return [];
    }

    /**
     * Get the actions available for the resource.
     *
     * @param  \Laravel\Nova\Http\Requests\NovaRequest  $request
     * @return array
     */
    public function actions(NovaRequest $request)
    {
        return [];
    }

    /**
     * Hide the default Create button
     * @param \Illuminate\Http\Request $request
     * @return bool
     */
    public static function authorizedToCreate(Request $request)
    {
        return false;
    }

    public static function createButton(NovaRequest $request)
    {
        return '/profiles/index';
    }
}
