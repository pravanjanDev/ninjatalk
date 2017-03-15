package v0.com.ninja.jdo;



import javax.jdo.annotations.PersistenceCapable;
import javax.jdo.annotations.PrimaryKey;

import com.google.appengine.api.datastore.Text;


@PersistenceCapable(detachable = "true")
public class Talk {
	
	@PrimaryKey
	private String songId ;
	
	private String songTitle;
	private String songAlbumName;
	private String songLink;
	private String singerName;
	private String songType;
	private String userId ; //if uploaed by user then userid or admin;
	private Text  detail;
	private Boolean isDeleted;
	
	public String getSongTitle() {
		return songTitle;
		
	}
	
	public void setSongTitle(String songTitle) {
		this.songTitle = songTitle;
	}
	public String getSongAlbumName() {
		return songAlbumName;
	}
	public void setSongAlbumName(String songAlbumName) {
		this.songAlbumName = songAlbumName;
	}
	public String getSongLink() {
		return songLink;
	}
	public void setSongLink(String songLink) {
		this.songLink = songLink;
	}
	
	public String getSongType() {
		return songType;
	}
	public void setSongType(String songType) {
		this.songType = songType;
	}
	
	public String getSongId() {
		return songId;
	}
	public void setSongId(String songId) {
		this.songId = songId;
	}

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public String getSingerName() {
		return singerName;
	}

	public void setSingerName(String singerName) {
		this.singerName = singerName;
	}

	public Text getDetail() {
		return detail;
	}

	public void setDetail(Text detail) {
		this.detail = detail;
	}

	public Boolean getIsDeleted() {
		return isDeleted;
	}

	public void setIsDeleted(Boolean isDeleted) {
		this.isDeleted = isDeleted;
	}
	
	

	

	
	

}
