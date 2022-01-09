# greatReads

## Project Name
greatReads

## Project Description

greatReads is an Airtable and React build that allows the user to track their reading. The homepage will display the user’s “currently reading pile” and “read pile”. Clicking on the book’s title will navigate to the book’s detail page, where the user can edit their reading information. The user can add a new book and log the title, author, start date, end date, number of stars, and a short text review.

## Wireframes

Upload images of your wireframes to an image hosting site or add them to an assets folder in your repo and link them here with a description of each specific wireframe.

## Component Hierarchy

! [component hierarcy] (/ComponentHierarchy.png)
! [components hierarchy] (/greatReads/blob/main/ComponentHierarchy.png)
! [components hierarchy] (/assets/ComponentHierarchy.png)

## API and Data Sample

Show us a snippet of JSON returned by your Airtable (you can find it under the API documentation) so we know you can access it and get the info you need. This __must__ be properly formatted. An example is below:

```json
{
    "records": [
        {
            "id": "recNBLCbY1ZPDpQKQ",
            "fields": {
                "finishDate": "2022-01-07",
                "title": "The Lying of Adults",
                "stars": 4,
                "review": "An extremely well written examination of adolescence in 1990's Naples.",
                "startDate": "2021-12-15"
            },
            "createdTime": "2022-01-07T20:41:46.000Z"
        },
        {
            "id": "rechxzICEbvmSCTn8",
            "fields": {
                "title": "Wolf Hall",
                "startDate": "2022-01-08"
            },
            "createdTime": "2022-01-07T20:41:46.000Z"
        },
        {
            "id": "reclxp6O44jr8ToWl",
            "fields": {
                "title": "The Secret History",
                "startDate": "2021-11-10",
                "finishDate": "2021-12-20",
                "stars": 5,
                "review": "An incredible combination of a fast-paced murder mystery and a deep look the intersection of life & art. "
            },
            "createdTime": "2022-01-07T20:41:46.000Z"
        }
    ],
    "offset": "itrSnaH0ghC2wbArz/reclxp6O44jr8ToWl"
}
```

### MVP/PostMVP

#### MVP 

- Homepage with clickable icons/titles that routes to each book’s detail page
- Get & post book tracking from Airtable
- Use forms to add a new book and update Airtable

#### PostMVP  
*These are examples only. Replace with your own Post-MVP features.*

- Add delete functionality
- Connect website with Google Books API to allow user to search for their book (rather than manually entering title & author); display book cover
- Create a “to-read” pile; users can add new books and tag them as currently reading or to-be-read

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations. Here's an example.

|  Day | Deliverable | Status
|---|---| ---|
|January 9| Prompt / Wireframes / Priority Matrix / Timeframes | Incomplete
|January 10| Project Approval | Incomplete
|January 11| Core Application Structure (HTML, CSS, etc.) | Incomplete
|January 12| Pseudocode / actual code | Incomplete
|January 9| Initial Clickable Model  | Incomplete
|January 13| MVP | Incomplete
|January 15| Post-MVP | Incomplete
|January 18| Presentations | Incomplete

## Timeframes


| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Component                 | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------------- | :------: | :------------: | :-----------: | :---------: |
| Proposal                  |    H     |      2hrs      |     hrs      |    hrs     |
| Airtable setup            |    H     |      1hrs      |     hrs      |    hrs     |
| Data population (homepage)|    H     |      3hrs      |     hrs      |    hrs     |
| Navbar routing            |    H     |      1hrs      |     hrs      |    hrs     |
| Clickable icons/titles    |    H     |      2hrs      |     hrs      |    hrs     |
| Form creation             |    H     |      4hrs      |     hrs      |    hrs     |
| Book details page         |    H     |      3hrs      |     hrs      |    hrs     |
| Book list (separate piles)|    H     |      3hrs      |     hrs      |    hrs     |
| Edit book functionality   |    H     |      4hrs      |     hrs      |    hrs     |
| Delete book functionality |    H     |      2hrs      |     hrs      |    hrs     |
| Google Books API          |    H     |      6hrs      |     hrs      |    hrs     |
| Style homepage            |    H     |      4hrs      |     hrs      |    hrs     |
| Style book detail page    |    H     |      4hrs      |     hrs      |    hrs     |
| Style form  page          |    H     |      4hrs      |     hrs      |    hrs     |
| Total                     |    H     |      43hrs     |     hrs      |    hrs     |

## SWOT Analysis

### Strengths: 
I have a clear understanding of my project’s MVPs and functionality. I’m confident I can meet my MVP requirements by using past assignments and labs as a reference, especially for creating the axios request with Airtable and utilizing get and post. 

### Weaknesses:
I still need to strengthen my understanding of CRUD, and think adding my post-MVP goal of using Google Books API in conjunction with my Airtable api will be the most challenging part of my project. 

### Opportunities:
This project will give me the opportunity to fully understand what I’ve learned in React the past two weeks. I’m especially eager to strengthen my understanding of state, props, and hooks. 

### Threats:
Sometimes I can get ahead of myself and starting thinking about post-MVP items and styling ideas while I still need to complete my MVPs. For this project, I need to stay focused on reaching all my MVP requirements before moving into post-MVP and styling. 
