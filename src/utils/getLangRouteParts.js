export default function getLangRouteParts (route) {
    return {
        // langRoute: (route.match(/^(\/ru)/g, '') || [''])[0],
        routeWithoutLang: route.replace(/^(\/ru)/, '')
    };
}
