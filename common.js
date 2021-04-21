module.exports = {
    CallbackToPromise: function (inputParameters, functionwithcallback) {
      return new Promise((resolve, reject) => {
        try {
          functionwithcallback(
            ...inputParameters,
            function (err) {
              try {
                this.resolve(err);
              } catch (err) {
                this.reject(err);
              }
            }.bind({ resolve: resolve, reject: reject })
          );
        } catch (err) {
          reject(err);
        }
      });
    },
  
    Cleanup: function (res, zipped_folder) {
      // send response if not sent.
      if (!res.headersSent) {
        this.cacheHeader(res, zipped_folder);
      }
    },

    cacheHeader: function (res, result) {
      if (result.message === undefined) {
        // in case of response with data, cache for 1 day and validate for every request.
        res.header("Cache-Control", "private, max-age=86400, no-cache");
      } else {
        // in case the request contains messages prevent caching response.
        res.header("Cache-Control", "no-cache, no-store, must-revalidate");
      }
    },
  };