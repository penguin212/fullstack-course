sequenceDiagram
    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    server-->>browser: Return 201 created
    deactivate server

    Note right of browser: The browser executes the callback function that renders the notes and the server adds the new note to the database