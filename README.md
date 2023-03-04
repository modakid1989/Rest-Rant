# Project REST-Rant

REST-Rant is an app where users can review restaurants.

# Tech Usage


# Routes

| Method | Path | Purpose |
| ------ | ---- | ------- |
| GET | / | Homepage |
| GET | / places/ | List all places |
| GET | / places/new | New form for a place |
| POST | /places | Create a new place | 
| GET | /places/:id | Show one place in detail |(Associated rants, new rant form, delete rant button)
| GET | /places/:id/edit | Edit form for a place |
| PUT | /places/:id | Make changes to existing place |
| DELETE | /places/:id | Delete a place |
| POST | /places/:id/rant| Add rant to a place |
| DELETE | /places/:id/rant/:rantId | Delete a rant |

# Database

### places

| Field | Type |
| ----- | ---- |
| _id |	Object ID |
| name | String |
| city | String |
| state | String |
| cuisines | String |
| pic |	String |



# Planning 

## User Stories

1. As a developer, I need to request data from the server about a specific place using a new endpoint, so I can populate the places detail page.
2.  As a user, I need a place to view the specific details of one of my pages on a new JSX page, so I can use the app.
3.  As a user, I need to edit a place using a new place editing form page, so I can change the data for one of my existing places.
4. As a user, I want to visit the homepage so that I can see a summary of the website's purpose and easily navigate to different sections.
5. As a user, I want to view a list of all places so that I can browse and choose a place to view in more detail.
6. As a user, I want to access a new form for a place so that I can create a new place to share with others.
7. As a user, I want to create a new place so that I can share it with others and provide more information about it.
8. As a user, I want to view a specific place in detail so that I can learn more about it and see any associated rants or comments from others.
9. As a user, I want to add a new rant to a place so that I can share my opinion and thoughts with others who are interested in the same place.
10. As a user, I want to delete a rant that I previously added to a place in case I change my mind or made a mistake.
11. As a user, I want to access an edit form for a place so that I can make changes or updates to a place that I previously created.
12. As a user, I want to make changes to an existing place so that I can keep the information up-to-date and accurate.
13. As a user, I want to delete a place that I previously created in case I no longer want it to be available to others.

## Wireframes


# Notes