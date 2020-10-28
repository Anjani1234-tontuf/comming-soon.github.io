/**
 * Serves HTML of the application for HTTP GET requests.
 * If folderId is provided as a URL parameter, the web app will list
 * the contents of that folder (if permissions allow). Otherwise
 * the web app will list the contents of the root folder.
 *
 * @param {Object} e event parameter that can contain information
 *     about any URL parameters provided.
 */
function doGet(e) {
    var template = HtmlService.createTemplateFromFile('Index');
    
    // Build and return HTML in IFRAME sandbox mode.
    return template.evaluate()
      .setTitle('File Downloader')
      .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

/**
 * Gets the subfolders of the parent folder with the given ID
 * Takes the DrvieApp root folder when the given id is 'root'
 */
function getFolders(parentId) {
  var parent = parentId == 'root' ? DriveApp.getRootFolder() : DriveApp.getFolderById(parentId);
  var data = {
    id: parentId,
    folders: {}
  };
  var iterator = parent.getFolders();
  while (iterator.hasNext()) {
    var folder = iterator.next();
    data.folders[folder.getId()] = folder.getName();
  }
  return data;
}

/**
 * Saves the file with the given URL into the target folder with the given ID
 * 
 * data = { status: string,
 *          url: string,
 *          fileName: string,
 *          folderId: string,
 *          folderName: string
 *        }
 */
function saveFile(data) {
  var folderId = data.folderId;
  var url = data.url;
  var folder = folderId == 'root' ? DriveApp.getRootFolder() : DriveApp.getFolderById(folderId);

  try {
    var blob = UrlFetchApp.fetch(url).getBlob();
    folder.createFile(blob);
    data.fileName = blob.getName();
    data.status = 'success';
  }
  catch (error) {
    data.status = 'fail';
  }
  
  return data;
}
