sidebarNodes={"extras":[{"id":"api-reference","title":"API Reference","group":"","headers":[{"id":"Modules","anchor":"modules"},{"id":"Exceptions","anchor":"exceptions"}]},{"id":"readme","title":"Plug","group":"","headers":[{"id":"Hello world","anchor":"hello-world"},{"id":"Installation","anchor":"installation"},{"id":"Supported Versions","anchor":"supported-versions"},{"id":"The Plug.Conn","anchor":"the-plug-conn"},{"id":"The Plug Router","anchor":"the-plug-router"},{"id":"Supervised handlers","anchor":"supervised-handlers"},{"id":"Testing plugs","anchor":"testing-plugs"},{"id":"Contributing","anchor":"contributing"},{"id":"License","anchor":"license"}]}],"exceptions":[{"id":"Plug.BadRequestError","title":"Plug.BadRequestError","group":"","functions":[{"id":"exception/1","anchor":"exception/1"},{"id":"message/1","anchor":"message/1"}]},{"id":"Plug.CSRFProtection.InvalidCSRFTokenError","title":"Plug.CSRFProtection.InvalidCSRFTokenError","group":"","functions":[{"id":"exception/1","anchor":"exception/1"},{"id":"message/1","anchor":"message/1"}]},{"id":"Plug.CSRFProtection.InvalidCrossOriginRequestError","title":"Plug.CSRFProtection.InvalidCrossOriginRequestError","group":"","functions":[{"id":"exception/1","anchor":"exception/1"},{"id":"message/1","anchor":"message/1"}]},{"id":"Plug.Conn.AlreadySentError","title":"Plug.Conn.AlreadySentError","group":"","functions":[{"id":"exception/1","anchor":"exception/1"},{"id":"message/1","anchor":"message/1"}]},{"id":"Plug.Conn.CookieOverflowError","title":"Plug.Conn.CookieOverflowError","group":"","functions":[{"id":"exception/1","anchor":"exception/1"},{"id":"message/1","anchor":"message/1"}]},{"id":"Plug.Conn.InvalidHeaderError","title":"Plug.Conn.InvalidHeaderError","group":"","functions":[{"id":"exception/1","anchor":"exception/1"},{"id":"message/1","anchor":"message/1"}]},{"id":"Plug.Conn.InvalidQueryError","title":"Plug.Conn.InvalidQueryError","group":"","functions":[{"id":"exception/1","anchor":"exception/1"},{"id":"message/1","anchor":"message/1"}]},{"id":"Plug.Conn.NotSentError","title":"Plug.Conn.NotSentError","group":"","functions":[{"id":"exception/1","anchor":"exception/1"},{"id":"message/1","anchor":"message/1"}]},{"id":"Plug.Conn.WrapperError","title":"Plug.Conn.WrapperError","group":"","functions":[{"id":"exception/1","anchor":"exception/1"},{"id":"message/1","anchor":"message/1"},{"id":"reraise/3","anchor":"reraise/3"}]},{"id":"Plug.Parsers.BadEncodingError","title":"Plug.Parsers.BadEncodingError","group":"","functions":[{"id":"exception/1","anchor":"exception/1"},{"id":"message/1","anchor":"message/1"}]},{"id":"Plug.Parsers.ParseError","title":"Plug.Parsers.ParseError","group":"","functions":[{"id":"exception/1","anchor":"exception/1"},{"id":"message/1","anchor":"message/1"}]},{"id":"Plug.Parsers.RequestTooLargeError","title":"Plug.Parsers.RequestTooLargeError","group":"","functions":[{"id":"exception/1","anchor":"exception/1"},{"id":"message/1","anchor":"message/1"}]},{"id":"Plug.Parsers.UnsupportedMediaTypeError","title":"Plug.Parsers.UnsupportedMediaTypeError","group":"","functions":[{"id":"exception/1","anchor":"exception/1"},{"id":"message/1","anchor":"message/1"}]},{"id":"Plug.Router.InvalidSpecError","title":"Plug.Router.InvalidSpecError","group":"","functions":[{"id":"exception/1","anchor":"exception/1"},{"id":"message/1","anchor":"message/1"}]},{"id":"Plug.Static.InvalidPathError","title":"Plug.Static.InvalidPathError","group":"","functions":[{"id":"exception/1","anchor":"exception/1"},{"id":"message/1","anchor":"message/1"}]},{"id":"Plug.TimeoutError","title":"Plug.TimeoutError","group":"","functions":[{"id":"exception/1","anchor":"exception/1"},{"id":"message/1","anchor":"message/1"}]},{"id":"Plug.UploadError","title":"Plug.UploadError","group":"","functions":[{"id":"exception/1","anchor":"exception/1"},{"id":"message/1","anchor":"message/1"}]}],"modules":[{"id":"Plug","title":"Plug","group":"","callbacks":[{"id":"call/2","anchor":"c:call/2"},{"id":"init/1","anchor":"c:init/1"}],"types":[{"id":"opts/0","anchor":"t:opts/0"}]},{"id":"Plug.Adapters.Cowboy2","title":"Plug.Adapters.Cowboy2","group":"","functions":[{"id":"child_spec/1","anchor":"child_spec/1"},{"id":"http/3","anchor":"http/3"},{"id":"https/3","anchor":"https/3"},{"id":"shutdown/1","anchor":"shutdown/1"}]},{"id":"Plug.Adapters.Cowboy2.BadResponseCheck","title":"Plug.Adapters.Cowboy2.BadResponseCheck","group":"","functions":[{"id":"data/4","anchor":"data/4"},{"id":"early_error/5","anchor":"early_error/5"},{"id":"info/3","anchor":"info/3"},{"id":"init/3","anchor":"init/3"},{"id":"terminate/3","anchor":"terminate/3"}]},{"id":"Plug.Builder","title":"Plug.Builder","group":"","functions":[{"id":"compile/3","anchor":"compile/3"},{"id":"plug/2","anchor":"plug/2"}],"types":[{"id":"plug/0","anchor":"t:plug/0"}]},{"id":"Plug.Conn","title":"Plug.Conn","group":"","functions":[{"id":"assign/3","anchor":"assign/3"},{"id":"async_assign/3","anchor":"async_assign/3"},{"id":"await_assign/3","anchor":"await_assign/3"},{"id":"chunk/2","anchor":"chunk/2"},{"id":"clear_session/1","anchor":"clear_session/1"},{"id":"configure_session/2","anchor":"configure_session/2"},{"id":"delete_req_header/2","anchor":"delete_req_header/2"},{"id":"delete_resp_cookie/3","anchor":"delete_resp_cookie/3"},{"id":"delete_resp_header/2","anchor":"delete_resp_header/2"},{"id":"delete_session/2","anchor":"delete_session/2"},{"id":"fetch_cookies/2","anchor":"fetch_cookies/2"},{"id":"fetch_query_params/2","anchor":"fetch_query_params/2"},{"id":"fetch_session/2","anchor":"fetch_session/2"},{"id":"get_req_header/2","anchor":"get_req_header/2"},{"id":"get_resp_header/2","anchor":"get_resp_header/2"},{"id":"get_session/2","anchor":"get_session/2"},{"id":"halt/1","anchor":"halt/1"},{"id":"merge_resp_headers/2","anchor":"merge_resp_headers/2"},{"id":"put_private/3","anchor":"put_private/3"},{"id":"put_req_header/3","anchor":"put_req_header/3"},{"id":"put_resp_content_type/3","anchor":"put_resp_content_type/3"},{"id":"put_resp_cookie/4","anchor":"put_resp_cookie/4"},{"id":"put_resp_header/3","anchor":"put_resp_header/3"},{"id":"put_session/3","anchor":"put_session/3"},{"id":"put_status/2","anchor":"put_status/2"},{"id":"read_body/2","anchor":"read_body/2"},{"id":"read_part_body/2","anchor":"read_part_body/2"},{"id":"read_part_headers/2","anchor":"read_part_headers/2"},{"id":"register_before_send/2","anchor":"register_before_send/2"},{"id":"request_url/1","anchor":"request_url/1"},{"id":"resp/3","anchor":"resp/3"},{"id":"send_chunked/2","anchor":"send_chunked/2"},{"id":"send_file/5","anchor":"send_file/5"},{"id":"send_resp/1","anchor":"send_resp/1"},{"id":"send_resp/3","anchor":"send_resp/3"},{"id":"update_req_header/4","anchor":"update_req_header/4"},{"id":"update_resp_header/4","anchor":"update_resp_header/4"}],"types":[{"id":"adapter/0","anchor":"t:adapter/0"},{"id":"assigns/0","anchor":"t:assigns/0"},{"id":"before_send/0","anchor":"t:before_send/0"},{"id":"body/0","anchor":"t:body/0"},{"id":"cookies/0","anchor":"t:cookies/0"},{"id":"halted/0","anchor":"t:halted/0"},{"id":"headers/0","anchor":"t:headers/0"},{"id":"host/0","anchor":"t:host/0"},{"id":"int_status/0","anchor":"t:int_status/0"},{"id":"method/0","anchor":"t:method/0"},{"id":"owner/0","anchor":"t:owner/0"},{"id":"param/0","anchor":"t:param/0"},{"id":"params/0","anchor":"t:params/0"},{"id":"peer/0","anchor":"t:peer/0"},{"id":"port_number/0","anchor":"t:port_number/0"},{"id":"query_string/0","anchor":"t:query_string/0"},{"id":"resp_cookies/0","anchor":"t:resp_cookies/0"},{"id":"scheme/0","anchor":"t:scheme/0"},{"id":"secret_key_base/0","anchor":"t:secret_key_base/0"},{"id":"segments/0","anchor":"t:segments/0"},{"id":"state/0","anchor":"t:state/0"},{"id":"status/0","anchor":"t:status/0"},{"id":"t/0","anchor":"t:t/0"}]},{"id":"Plug.Crypto","title":"Plug.Crypto","group":"","functions":[{"id":"mask/2","anchor":"mask/2"},{"id":"masked_compare/3","anchor":"masked_compare/3"},{"id":"safe_binary_to_term/2","anchor":"safe_binary_to_term/2"},{"id":"secure_compare/2","anchor":"secure_compare/2"}]},{"id":"Plug.Debugger","title":"Plug.Debugger","group":""},{"id":"Plug.ErrorHandler","title":"Plug.ErrorHandler","group":""},{"id":"Plug.Exception","title":"Plug.Exception","group":"","functions":[{"id":"status/1","anchor":"status/1"}],"types":[{"id":"t/0","anchor":"t:t/0"}]},{"id":"Plug.HTML","title":"Plug.HTML","group":"","functions":[{"id":"html_escape/1","anchor":"html_escape/1"},{"id":"html_escape_to_iodata/1","anchor":"html_escape_to_iodata/1"}]},{"id":"Plug.Router","title":"Plug.Router","group":"","functions":[{"id":"delete/3","anchor":"delete/3"},{"id":"forward/2","anchor":"forward/2"},{"id":"get/3","anchor":"get/3"},{"id":"match/3","anchor":"match/3"},{"id":"options/3","anchor":"options/3"},{"id":"patch/3","anchor":"patch/3"},{"id":"post/3","anchor":"post/3"},{"id":"put/3","anchor":"put/3"}]},{"id":"Plug.Test","title":"Plug.Test","group":"","functions":[{"id":"conn/3","anchor":"conn/3"},{"id":"delete_req_cookie/2","anchor":"delete_req_cookie/2"},{"id":"init_test_session/2","anchor":"init_test_session/2"},{"id":"put_req_cookie/3","anchor":"put_req_cookie/3"},{"id":"recycle_cookies/2","anchor":"recycle_cookies/2"},{"id":"sent_resp/1","anchor":"sent_resp/1"}]},{"id":"Plug.Upload","title":"Plug.Upload","group":"","functions":[{"id":"random_file/1","anchor":"random_file/1"},{"id":"random_file!/1","anchor":"random_file!/1"},{"id":"start_link/0","anchor":"start_link/0"}],"types":[{"id":"t/0","anchor":"t:t/0"}]},{"id":"Plug.CSRFProtection","title":"Plug.CSRFProtection","group":"Plugs","functions":[{"id":"call/2","anchor":"call/2"},{"id":"delete_csrf_token/0","anchor":"delete_csrf_token/0"},{"id":"get_csrf_token/0","anchor":"get_csrf_token/0"},{"id":"init/1","anchor":"init/1"}]},{"id":"Plug.Head","title":"Plug.Head","group":"Plugs","functions":[{"id":"call/2","anchor":"call/2"},{"id":"init/1","anchor":"init/1"}]},{"id":"Plug.Logger","title":"Plug.Logger","group":"Plugs","functions":[{"id":"call/2","anchor":"call/2"},{"id":"init/1","anchor":"init/1"}]},{"id":"Plug.MethodOverride","title":"Plug.MethodOverride","group":"Plugs","functions":[{"id":"call/2","anchor":"call/2"},{"id":"init/1","anchor":"init/1"}]},{"id":"Plug.Parsers","title":"Plug.Parsers","group":"Plugs","callbacks":[{"id":"parse/5","anchor":"c:parse/5"}],"functions":[{"id":"call/2","anchor":"call/2"},{"id":"init/1","anchor":"init/1"}]},{"id":"Plug.RequestId","title":"Plug.RequestId","group":"Plugs","functions":[{"id":"call/2","anchor":"call/2"},{"id":"init/1","anchor":"init/1"}]},{"id":"Plug.SSL","title":"Plug.SSL","group":"Plugs","functions":[{"id":"call/2","anchor":"call/2"},{"id":"init/1","anchor":"init/1"}]},{"id":"Plug.Session","title":"Plug.Session","group":"Plugs","functions":[{"id":"call/2","anchor":"call/2"},{"id":"init/1","anchor":"init/1"}]},{"id":"Plug.Static","title":"Plug.Static","group":"Plugs","functions":[{"id":"call/2","anchor":"call/2"},{"id":"init/1","anchor":"init/1"}]},{"id":"Plug.Adapters.Cowboy","title":"Plug.Adapters.Cowboy","group":"Plug.Adapters","functions":[{"id":"child_spec/1","anchor":"child_spec/1"},{"id":"child_spec/4","anchor":"child_spec/4"},{"id":"http/3","anchor":"http/3"},{"id":"https/3","anchor":"https/3"},{"id":"shutdown/1","anchor":"shutdown/1"}]},{"id":"Plug.Adapters.Translator","title":"Plug.Adapters.Translator","group":"Plug.Adapters","functions":[{"id":"translate/4","anchor":"translate/4"}]},{"id":"Plug.Conn.Adapter","title":"Plug.Conn.Adapter","group":"Plug.Conn","callbacks":[{"id":"chunk/2","anchor":"c:chunk/2"},{"id":"read_req_body/2","anchor":"c:read_req_body/2"},{"id":"send_chunked/3","anchor":"c:send_chunked/3"},{"id":"send_file/6","anchor":"c:send_file/6"},{"id":"send_resp/4","anchor":"c:send_resp/4"}]},{"id":"Plug.Conn.Cookies","title":"Plug.Conn.Cookies","group":"Plug.Conn","functions":[{"id":"decode/1","anchor":"decode/1"},{"id":"encode/2","anchor":"encode/2"}]},{"id":"Plug.Conn.Query","title":"Plug.Conn.Query","group":"Plug.Conn","functions":[{"id":"decode/2","anchor":"decode/2"},{"id":"decode_pair/2","anchor":"decode_pair/2"},{"id":"encode/2","anchor":"encode/2"}]},{"id":"Plug.Conn.Status","title":"Plug.Conn.Status","group":"Plug.Conn","functions":[{"id":"code/1","anchor":"code/1"},{"id":"reason_phrase/1","anchor":"reason_phrase/1"}]},{"id":"Plug.Conn.Unfetched","title":"Plug.Conn.Unfetched","group":"Plug.Conn","types":[{"id":"t/0","anchor":"t:t/0"}]},{"id":"Plug.Conn.Utils","title":"Plug.Conn.Utils","group":"Plug.Conn","functions":[{"id":"content_type/1","anchor":"content_type/1"},{"id":"list/1","anchor":"list/1"},{"id":"media_type/1","anchor":"media_type/1"},{"id":"params/1","anchor":"params/1"},{"id":"token/1","anchor":"token/1"},{"id":"validate_utf8!/3","anchor":"validate_utf8!/3"}],"types":[{"id":"params/0","anchor":"t:params/0"}]},{"id":"Plug.Crypto.KeyGenerator","title":"Plug.Crypto.KeyGenerator","group":"Plug.Crypto","functions":[{"id":"generate/3","anchor":"generate/3"}]},{"id":"Plug.Crypto.MessageEncryptor","title":"Plug.Crypto.MessageEncryptor","group":"Plug.Crypto","functions":[{"id":"decrypt/3","anchor":"decrypt/3"},{"id":"encrypt/3","anchor":"encrypt/3"},{"id":"encrypt_and_sign/4","anchor":"encrypt_and_sign/4"},{"id":"verify_and_decrypt/4","anchor":"verify_and_decrypt/4"}]},{"id":"Plug.Crypto.MessageVerifier","title":"Plug.Crypto.MessageVerifier","group":"Plug.Crypto","functions":[{"id":"sign/3","anchor":"sign/3"},{"id":"verify/2","anchor":"verify/2"}]},{"id":"Plug.Parsers.JSON","title":"Plug.Parsers.JSON","group":"Plug.Parsers","functions":[{"id":"parse/5","anchor":"parse/5"}]},{"id":"Plug.Parsers.MULTIPART","title":"Plug.Parsers.MULTIPART","group":"Plug.Parsers","functions":[{"id":"parse/5","anchor":"parse/5"}]},{"id":"Plug.Parsers.URLENCODED","title":"Plug.Parsers.URLENCODED","group":"Plug.Parsers","functions":[{"id":"parse/5","anchor":"parse/5"}]},{"id":"Plug.Session.COOKIE","title":"Plug.Session.COOKIE","group":"Plug.Session","functions":[{"id":"delete/3","anchor":"delete/3"},{"id":"get/3","anchor":"get/3"},{"id":"init/1","anchor":"init/1"},{"id":"put/4","anchor":"put/4"}]},{"id":"Plug.Session.ETS","title":"Plug.Session.ETS","group":"Plug.Session","functions":[{"id":"delete/3","anchor":"delete/3"},{"id":"get/3","anchor":"get/3"},{"id":"init/1","anchor":"init/1"},{"id":"put/4","anchor":"put/4"}]},{"id":"Plug.Session.Store","title":"Plug.Session.Store","group":"Plug.Session","callbacks":[{"id":"delete/3","anchor":"c:delete/3"},{"id":"get/3","anchor":"c:get/3"},{"id":"init/1","anchor":"c:init/1"},{"id":"put/4","anchor":"c:put/4"}],"types":[{"id":"cookie/0","anchor":"t:cookie/0"},{"id":"session/0","anchor":"t:session/0"},{"id":"sid/0","anchor":"t:sid/0"}]}],"tasks":[]}