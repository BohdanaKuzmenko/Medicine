var HTTP = {
    encodeQueryData: function(data) {
        if (data == null) return;
        return Object.keys(data).map(function(key) {
            return [key, data[key]].map(encodeURIComponent).join("=");
        }).join("&");
    },
    GET : function (url, returnHeaders) {
        var responseData = {};
        console.log("GET " + url);
        $.ajax({
            type: 'GET',
            url: url,
            async: false,
            success: function (response, textStatus, request) {
                if (returnHeaders == true) {
                    responseData['data'] = response;
                    responseData['firstPageUrl'] = request.getResponseHeader('X-Link-First');
                    responseData['nextPageUrl'] = request.getResponseHeader('X-Link-Next');
                    responseData['lastPageUrl'] = request.getResponseHeader('X-Link-Last');
                    responseData['itemsCount'] = request.getResponseHeader('X-Total-Count');
                    console.log(request.getAllResponseHeaders());
                } else {
                    responseData = response;
                }
            }
        });
        return responseData;
    },
    POST : function (url, data) {
        var responseData = null;
        console.log("POST " + url);
        $.ajax({
            type: 'POST',
            url: url,
            data: JSON.stringify(data),
            async: false,
            dataType: 'json',
            contentType: 'application/json; charset=utf-8',
            success: function (response) {
                responseData = response.data;
            }
        });
        return responseData;
    },
    DELETE : function (url, data) {
        var responseData = null;
        console.log("DELETE " + url);
        $.ajax({
            type: 'DELETE',
            url: url,
            data: data,
            async: false,
            success: function (response) {
                responseData = response.data;
            }
        });
        return responseData;
    }
};

module.exports = HTTP;