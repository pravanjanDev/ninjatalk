package v0.com.ninja.controller;



import java.util.Map;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import v0.com.ninja.helper.NinjaHelper;


public class NinjaController {
	
	@RequestMapping(value = "/getSpeaker/{name}/",method= RequestMethod.GET)
	public @ResponseBody Map<String,Object> savewish (@PathVariable String name ) {
		
		return new NinjaHelper().getSpeaker(name);		

		
	}
	


}
