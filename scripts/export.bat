xcopy "%1..\..\Apps\Flipper\Flipper\Client" "%1Flipper\Client" /Y /I /S
xcopy "%1..\..\Apps\Flipper\Lib\Client" "%1Flipper\Client" /Y /I /S /EXCLUDE:%2
