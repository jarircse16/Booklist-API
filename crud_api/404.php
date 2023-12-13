<?php
// Define your valid routes
$validRoutes = [
    '/crud_api',
    '/crud_api/frontend',
    '/crud_api/frontend/css',
    '/crud_api/frontend/js',
    '/crud_api/frontend/layouts',
    '/crud_api/backend',
    '/crud_api/backend/api',
    '/crud_api/backend/config',
    '/crud_api/backend/database',
];

// Get the requested URL
$requestUrl = $_SERVER['REQUEST_URI'];

// Check if the requested URL is in the valid routes
if (!in_array($requestUrl, $validRoutes)) {
    http_response_code(404);
    echo '<h1>404 Not Found</h1>';
    echo '<p>The requested page could not be found.</p>';
    echo '<p>Jarir Framework 1.0.0.0</p>';
    // You can customize the 404 page content further if needed.
    exit;
}
?>
