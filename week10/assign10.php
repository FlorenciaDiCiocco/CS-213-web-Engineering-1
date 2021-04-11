<?php
     // create a PHP object with the filename,filetype, and cwd properties.
     class fileN
     {
        public $fileName;
        public $fileType;
        public $cwd;

        // Methods
        function set_name($fileName) {
            $this->fileName = $fileName;
        }
        function get_name() {
            return $this->fileName;
        }
        function set_type($fileType) {
            $this->fileType = $fileType;
        }
        function get_type() {
            return $this->fileType;
        }
        function set_cwd($cwd) {
            $this->cwd = $cwd;
        }
        function get_cwd() {
            return $this->cwd;
        }
     }


     $cwd = getcwd();     // get path to the current working directory
     $folder = ".";       // Set the folder variable to specify the "current" directory

     // create an array of filenames of files from the current directory
     $files = scandir($folder);
     $directory = Array();     // create a array object to store a list of objects.

     


     foreach ($files as $myfile){
         #* Set each fileN object property to the appropriate values.
     #* You can get each file name from the "$files" array.
     $new_element= new fileN();
     $new_element->set_name($myfile);
     #* You can get each file type by calling the php function "filetype()" passing it the filename.
     #* The "filetype()" function returns the file type. The returned file type is either "file" or "dir".
     $new_element->set_type(filetype($myfile));
     #* The current working directory has been stored in $cwd.
     $new_element->set_cwd($cwd);
     array_push($directory,$new_element);
     }



     /*******************End of your Code *******************************************/

     // convert the PHP array of objects to a JSON string
     $str = json_encode($directory);
     $str = str_replace("\\/", "/", $str);
     print "\n $str \n";   //output the json string - The string is sent to the browser.
 ?>

